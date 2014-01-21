var http = require('http');
var fs = require('fs');
var json = require('jsonreq');

function main (){
	console.log("start");
	loadAllExperimentResulst(new Array(),0,100, function (experimentData){
		//console.log("done with exporting",experimentData);

		loadAllTests(new Array(),0,100, function (testsData){
			//console.log("done with tests",testsData);
			exportAllDataStep1(experimentData,testsData,true);
			//exportParticipantList(experimentData,testsData);
		});

	});

};

function loadAllExperimentResulst(container, skip, limit, callback){


	json.get('http://localhost:2403/experresults?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullExperresults(container,skip+=100,100);
    	}else{
    		//we reach this point only when we are finished    	
        
        	callback(container);
    	}
	});

}

function loadAllTests(container, skip, limit, callback){
	json.get('http://localhost:2403/test?{"$skip": '+skip+',"$limit": '+limit+'}', function (err, data) {
    	//console.log("bla",err,data);
    	//console.log(data.length);
    	
    	container=container.concat(data);
    	if(data.length===100){
    		pullTest(container,skip+=100,100);
    	}else{
    		callback(container);
    	}
	});
}


function exportParticipantList(experimentData, testsData){

	//Q2_1 age
	//Q3 affiliation
	//Q11 gender
	//Q10 What do you study
	//Q4 Interacted with social robots
	//Q5 Vision Normal
	//Q8 additional infos
	//isRobotCondition:
	//isLinesFirst:

	var csv="Part, Robot, LinesFirst, Age, Gender, Affiliation, Interacted with social robots, studies, additional Infos\n";

	for(a in experimentData){
		if(parseInt(experimentData[a].res.part)>29){
			var bla = experimentData[a].res;

			csv+=bla.part+", ";
			csv+=bla.isRobotCondition+", ";
			csv+=bla.isLinesFirst+", ";
			csv+=bla.survey.Q2_1+", ";

			if(parseInt(bla.survey.Q11)==1){
				csv+="Other, ";
			}else if(parseInt(bla.survey.Q11)==2){
				csv+="Female, ";
			}else{
				csv+="Male, ";
			}
			
			if(parseInt(bla.survey.Q3)==1){
				csv+="Undergraduate Student, ";
			}else if(parseInt(bla.survey.Q3)==2){
				csv+="Postgraduate Student, ";
			}else if(parseInt(bla.survey.Q3)==3){
				csv+="Staff Member, ";
			}else if(parseInt(bla.survey.Q3)==4){
				csv+="Other, ";
			}

			
			if(parseInt(bla.survey.Q4)==1){
				csv+="true, ";
			}else{
				csv+="false, ";
			}
			var q10 = bla.survey.Q10;
			if(bla.survey.Q10)
				q10 = q10.replace(",", ' ');
			csv+=q10+", ";
			csv+=bla.survey.Q8;
			csv+="\n";
			//console.log(bla.part, bla.survey.Q2_1);
		}
	}

	console.log(csv);
	storeFile("partQuestion.csv", csv);
}

function exportAllDataStep1(experimentData, testsData, multi){

	//console.log(returnTestsForPart(32,testsData).name);

	console.log(experimentData.length);

	var csvAllPeep = "Part, Rownumber, Seat, Word, Error\n";
	var csvOnlyPart = "Part, Rownumber, Seat, Word, Error\n";
	
	for(a in experimentData){
		if(parseInt(experimentData[a].res.part)>29){
			//console.log(a, experimentData[a].res.part);

			var bla = experimentData[a].res.part;
			if(parseInt(experimentData[a].res.part) > 100){
				experimentData[a].res.part = parseInt(experimentData[a].res.part)-100;
			}
			//console.log(a, experimentData[a].res.part);

			var d = experimentData[a].res;

			//console.log(bla, d.part, returnTestsForPart(d.part,testsData).name);
			var r = exportAllDataStep2(bla, d, returnTestsForPart(d.part,testsData),multi);

			//Save separate files
			
			if(multi){
				storeFile("inCSV/"+bla+"_all.csv",r.all);
				storeFile("inCSV/"+bla+"_part.csv",r.only);
			}else{
				csvAllPeep+=r.all;
				csvOnlyPart+=r.only;
			}
		}
	}

	if(!multi){
		storeFile("_all.csv",csvAllPeep);
		storeFile("_part.csv",csvOnlyPart);
	}

	/*
	var a = 46;
	console.log(a, experimentData[a].res.part);
	var d = experimentData[a].res;
	console.log(returnTestsForPart(d.part,testsData));
	returnTestsForPart(d.part,testsData);
	//exportAllDataStep2(d.part, d, returnTestsForPart(d.part,testsData));
	*/
	
}

function exportAllDataStep2(_id, d, t, multi){
	var wordsAmbig = d.wordsAmbig;
	var wordsNAmbig = d.wordsNAmbig;

	for(a in wordsAmbig){	
		//console.log(wordsAmbig[a].id, wordsAmbig[a].res, t.everything[wordsAmbig[a].id].v1[4], t.everything[wordsAmbig[a].id].scheme);		
		t.everything[wordsAmbig[a].id]["res"] = wordsAmbig[a].res;
	}

	for(a in wordsNAmbig){		
		t.everything[wordsNAmbig[a].id]["res"] = wordsNAmbig[a].res;
	}



	var off = 27
	if(d.isLinesFirst){
		off=202
	}
	var tev = t.everything;


	var csvAllPeep = "";
	var csvOnlyPart = "";

	if(multi){
		csvAllPeep = "Part, Rownumber, Seat, Word, Error\n";
		csvOnlyPart = "Part, Rownumber, Seat, Word, Error\n";
	}
	var csvAllPeepNoHead ="";
	var csvOnlyPartNoHead ="";

	for(a in tev){
		
		//all users
		if(tev[a].type == "drawManyWord" && a>off){

			var _res ="";
			if(tev[a].res != undefined){
				_res = tev[a].res
			}

			csvAllPeepNoHead+=_id+", "+a+", "+tev[a].user+", "+tev[a].v1[tev[a].user]+", "+_res+"\n";
		}

		//only participant
		if(tev[a].type == "drawManyWord" && a>off && tev[a].user == 4){
			var _res ="";
			if(tev[a].res != undefined){
				_res = tev[a].res
			}
			csvOnlyPartNoHead+=_id+", "+a+", "+tev[a].user+", "+tev[a].v1[tev[a].user]+", "+_res+"\n";
		}
	}


	//console.log(csvAllPeep);
	csvAllPeep+=csvAllPeepNoHead;
	csvOnlyPart+=csvOnlyPartNoHead;
	
	
	return {
		"all":csvAllPeep,
		"only":csvOnlyPart,
		"allNoHead":csvAllPeepNoHead,
		"onlyNoHead":csvOnlyPartNoHead
	};
}

function returnTestsForPart(part, testsData){

	//console.log("part:",part);
	for(a in testsData){
		if(parseInt(testsData[a].name)==parseInt(part)){
			return testsData[a];
		}		
	}

	return null;
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