var http = require('http');
var fs = require('fs');
var json = require('jsonreq');



function main (){
	console.log("start");
	pullResults(new Array(),0,100);
	pullTest(new Array(),0,100);
	pullExperresults(new Array(),0,100);

};

function pullResults(container, skip, limit){


	json.get('http://localhost:2403/results?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullResults(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished

    		//console.log(JSON.stringify(container));
    		var excludeIds = ["72ccc272d29a684a","14f59de248141a77","2031318a5fa4b87e", "6ecf3abea85e3adb"]; //those two values where test values. I exclode it in the backup file
    		var _excSave = new Array();

    		for(a in container){
    			if(excludeIds.indexOf(container[a].userid) === -1){
    				_excSave.push(container[a]);
    			}

    		}
    		    		
    		storeFile("individualLineTest.js", "var individualLineTest="+JSON.stringify(_excSave)+";");
            storeFile("individualLineTest.json", JSON.stringify(_excSave));
    	}
	});

}

function pullTest(container, skip, limit){
	json.get('http://localhost:2403/test?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullResults(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished

    		//console.log(JSON.stringify(container));
    		    		
    		storeFile("groupTestScripts.js", "var groupTestScripts="+JSON.stringify(container)+";");
            storeFile("groupTestScripts.json", JSON.stringify(container));
    	}
	});
}

function pullExperresults(container, skip, limit){
	json.get('http://localhost:2403/experresults?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullResults(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished    		    		
    		storeFile("groupExperimentResults.js", "var groupExperimentResults="+JSON.stringify(container)+";");
            storeFile("groupExperimentResults.json", JSON.stringify(container));
    	}
	});
}

function storeFile(filename, data){
	console.log(filename, data.length);

	fs.writeFile(filename, data, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	});
}



main();