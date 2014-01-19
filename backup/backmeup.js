var http = require('http');
var fs = require('fs');
var json = require('jsonreq');

var globalWordCountList;

function main (){
	console.log("start");
	//pullResults(new Array(),0,100);
	pullTest(new Array(),0,100);
	//pullExperresults(new Array(),23,100);

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
    		var excludeIds = ["72ccc272d29a684a","14f59de248141a77"]; //those two values where test values. I exclode it in the backup file
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
    		pullTest(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished

    		//console.log(JSON.stringify(container));
    		    		
    		storeFile("groupTestScripts.js", "var groupTestScripts="+JSON.stringify(container)+";");
            storeFile("groupTestScripts.json", JSON.stringify(container));


            globalWordCountList = createNameCountObject(container);
            //get experiment results
            pullExperresults(new Array(),23,100);
    	}
	});
}

function pullExperresults(container, skip, limit){

	json.get('http://localhost:2403/experresults?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullExperresults(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished    	
        
            container= addWordInfoToContainer(container);

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

function addWordInfoToContainer(container){
    //globalWordCountList

    //console.log(globalWordCountList);
    for(a in container){
        console.log("part",container[a]["res"]["part"], globalWordCountList[container[a]["res"]["part"]]);

        var _locCount = globalWordCountList[container[a]["res"]["part"]];

        //word abig
        
        for(k in container[a]["res"]["wordsAmbig"]){
            //container[a]["res"]["wordsAmbig"][k]["id"];

            for(c in _locCount){
                if(_locCount[c]["id"] == container[a]["res"]["wordsAmbig"][k]["id"]){
                    container[a]["res"]["wordsAmbig"][k]["word"] = _locCount[c]["word"];
                    container[a]["res"]["wordsAmbig"][k]["hearCount"] = _locCount[c]["hearCount"];
                }
            }
        }

        //word nonAmbig
        for(k in container[a]["res"]["wordsNAmbig"]){
            //container[a]["res"]["wordsAmbig"][k]["id"];

            for(c in _locCount){
                if(_locCount[c]["id"] == container[a]["res"]["wordsNAmbig"][k]["id"]){
                    container[a]["res"]["wordsNAmbig"][k]["word"] = _locCount[c]["word"];
                    container[a]["res"]["wordsNAmbig"][k]["hearCount"] = _locCount[c]["hearCount"];
                }
            }
        }
    }

    return container;
}


function createNameCountObject(container){

    var nameObject = {};
    //nameObject['153'] = "15";
    
    for(a in container){
        //console.log(parseInt(container[a]["name"])+100);
        var _store = wordRepConf(container[a]["everything"]);
        nameObject[container[a]["name"]] = _store;
        nameObject[parseInt(container[a]["name"])+100] = _store;
    }


    return nameObject;

}


function wordRepConf (argument) {
    // body...


var md = argument;
//md = dataWordsFirst;

var offset = 28;
var lowset = 177;

if(md[12].v1=="Verbal Task"){
    //words first
    //console.log("Verbal Task", md[12]);
}else if(md[12].v1=="Visual test"){
    //lines first
    //console.log("Visual test", md[12]);
    offset=203;
    lowset=352;
}else{
    //console.log("ubsi", md[12]);
}


//console.log('----------------------------');



//console.log(md[offset]);
//console.log(md[lowset]);
md=md.splice(offset, 150);
//console.log(md[0]);
//console.log(md[149]);

var heardWord = [];

for(var i=md.length-1; i>=0; i=i-5){
    //console.log(i, md[i]["v1"][4]);

    //loop through rest
    var size = "";
    var bla = 0;
    var howOften = 0;
    for(var k=i-5; k>=0; k=k-5){
        //console.log(i, md[i]["v1"][4], md[k]["v1"][4]);
        size+="-";
        bla++;

        if(md[i]["v1"][4]==(md[k]["v1"][3] || md[k]["v1"][2] || md[k]["v1"][1] || md[k]["v1"][0])){
            //console.log("found");
            howOften++;
        }
    }

    //console.log(md[i]["v1"][4], howOften, i+offset);

    heardWord.push({
        "id" : i+offset,
        "word" : md[i]["v1"][4],
        "hearCount" : howOften
    });

    //console.log(bla, size);
}

//console.log(heardWord);

return heardWord;

}


main();