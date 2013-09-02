var http = require('http');
var fs = require('fs');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'localhost',
  port: '2403',
  path: '/experresults'
};

var resultsBack;

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
  	pareReulst(JSON.parse(str));
    
  });
}


http.request(options, callback).end();


function pareReulst(res){
	var o = new Object();

	for (a in res){
		o[res[a].res.part]=res[a].res;
		//console.log(res[a].res.part);
	}
	//console.log(o['21']);

	startGetTests(o);
}


function startGetTests(resultO){
	http.request({
	  host: 'localhost',
	  port: '2403',
	  path: '/test'
	}, 
	function(response) {
	  var str = '';

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
	    str += chunk;
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {

	  	var _json = JSON.parse(str);
	  	var o = Object();


	  	for(a in _json){
	  		//console.log(_json[a].name);
	  		o[_json[a].name]=_json[a].everything;

	  	}
	  	weHaveAllData(resultO,o);
	    
	  });
	}).end();
}

function weHaveAllData(resultO,testO){
	var csv='Page, word, conf\n';
	for(b in testO){
		if(resultO[b]!==undefined){
			//console.log("__________________part: ",b);
			csv+="PartNr, "+b+", ---\n";
			for (a in resultO[b].wordsAmbig){
				//console.log(resultO[b].wordsAmbig[a].id,testO[b][resultO[b].wordsAmbig[a].id].v1[4],resultO[b].wordsAmbig[a].res);
				csv+=""+resultO[b].wordsAmbig[a].id+", "+testO[b][resultO[b].wordsAmbig[a].id].v1[4]+", "+resultO[b].wordsAmbig[a].res+"\n";
			}
			for (a in resultO[b].wordsNAmbig){
				//console.log(resultO[b].wordsNAmbig[a].id,testO[b][resultO[b].wordsNAmbig[a].id].v1[4],resultO[b].wordsNAmbig[a].res);
				csv+=""+resultO[b].wordsNAmbig[a].id+", "+testO[b][resultO[b].wordsNAmbig[a].id].v1[4]+", "+resultO[b].wordsNAmbig[a].res+"\n";
			}
		}
	}
	console.log(csv);
	timeToWrite(csv);
	
}

function timeToWrite(csv){
	fs.writeFile("results.csv", csv, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	});
}