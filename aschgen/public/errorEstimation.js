var aschObj = aschObj || {}
aschObj.aschTracks = [];
aschObj.aschResults = [];
aschObj.excludeIds = ["72ccc272d29a684a","14f59de248141a77","2031318a5fa4b87e", "6ecf3abea85e3adb"];
aschObj.excludeIds = ["72ccc272d29a684a","14f59de248141a77",]; //without times
aschObj.lineList = new Object();
aschObj.testList = new Object();
aschObj.experResults = new Object();
aschObj.allCount = new Object();
aschObj.allPers = new Object();
aschObj.gesPart = 23;

start();

function start(){
	//console.log("germ");
	createHash();
	walkThroughTests();
}

function createHash(){
	//console.log("hash", aschResults);
	
	aschObj.hard = window.configSlides[27];
	aschObj.easy = window.configSlides[28];

	
	for(a in aschObj.hard.list){
		console.log(aschObj.hard.list[a]);
		var _hash = 23+5*aschObj.hard.list[a].answer + 2*aschObj.hard.list[a].v1 + 3*aschObj.hard.list[a].v2 + 4*aschObj.hard.list[a].v3;
		aschObj.hard.list[a].hash = _hash;
		aschObj.lineList[aschObj.hard.list[a].hash]=aschObj.hard.list[a].testSlide;
		//console.log(aschObj.hard.list[a]);
	}	

	for(a in aschObj.easy.list){
		
		var _hash = 42+5*aschObj.easy.list[a].answer + 2*aschObj.easy.list[a].v1 + 3*aschObj.easy.list[a].v2 + 4*aschObj.easy.list[a].v3;
		aschObj.easy.list[a].hash = _hash;
		aschObj.lineList[aschObj.easy.list[a].hash]=aschObj.easy.list[a].testSlide;
	}

	//console.log(aschObj.lineList, aschObj.hard, aschObj.easy);
}


function walkThroughTests(){

	var query = {};

	dpd.test.get(query, function (result) {
	  //console.log(result);

	  for (a in result){

		  for (var i = 0; i < 150; i+=5) {
		  	console.log(result[a].everything[31+i]);
		  	var add = 42;
		  	if(i<75){
		  		add=23;
		  	}

		  	var _hash = add+5*result[a].everything[31+i].answer + 2*result[a].everything[31+i].v1 + 3*result[a].everything[31+i].v2 + 4*result[a].everything[31+i].v3;
			result[a].everything[31+i].hash = _hash;
			result[a].everything[31+i].slideNr = aschObj.lineList[_hash];
		  	//console.log(aschObj.lineList[_hash], result[0].everything[31+i]);
		  }

		  aschObj.testList[result[a].name]=result[a];
	  }

	  walkThroughExpResults()
	});

}

function walkThroughExpResults(){
	console.log("walkThroughExpResults");
	var query = {};

	dpd.experresults.get(query, function (result) {
		//console.log(result);
		for(a in result){
			aschObj.experResults[result[a].res.part]=result[a];
		}
		calculate();
	});

}

function calculate(){
	console.log("calculate");
	for (var k = 1; k < (aschObj.gesPart+1); k+=1) {
		
		
	
		for (var i = 0; i < 15; i+=1) {
			addToAllCount(aschObj.testList[k].everything[31+i*5].slideNr,aschObj.experResults[k].res.lineAmbig[i].res);	
		}

		for (var i = 0; i < 15; i+=1) {
			addToAllCount(aschObj.testList[k].everything[106+i*5].slideNr,aschObj.experResults[k].res.lineNAmbig[i].res);
		}
	};


	//add percetages
	var _csv="nr, p\n";
	for(a in aschObj.allCount){
		aschObj.allPers[a]={"pers":aschObj.allCount[a]*100/aschObj.gesPart, "count":aschObj.allCount[a]};
		//console.log(a,aschObj.allPers[a].pers,aschObj.allCount[a]);
		_csv += a+", "+aschObj.allPers[a].pers+"\n";
	}
	console.log(_csv);
}

function addToAllCount(slideNr,trueFalse){
	//console.log(slideNr,trueFalse);

	if(aschObj.allCount[slideNr]===undefined){
		aschObj.allCount[slideNr]=0;
	}else{
		if(trueFalse){
			aschObj.allCount[slideNr]+=1;
		}
	}
}