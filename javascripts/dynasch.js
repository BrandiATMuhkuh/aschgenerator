
var DynAsch={
};

DynAsch.main = function(){
	console.log("Start DynAsch");

	/*
	//console.log(this.conformitCount(true, true, "lineAmbig").aschValue);
	console.log("T|T|T|T|"+DynAsch.conformitCount(true, true, "lineAmbig").aschValue);
	console.log("T|T|T|F|"+DynAsch.conformitCount(true, true, "wordsAmbig").aschValue);
	console.log("T|T|F|T|"+DynAsch.conformitCount(true, true, "lineNAmbig").aschValue);
	console.log("T|T|F|F|"+DynAsch.conformitCount(true, true, "wordsNAmbig").aschValue);

	console.log("T|F|T|T|"+DynAsch.conformitCount(true, false, "lineAmbig").aschValue);
	console.log("T|F|T|F|"+DynAsch.conformitCount(true, false, "wordsAmbig").aschValue);
	console.log("T|F|F|T|"+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue);
	console.log("T|F|F|F|"+DynAsch.conformitCount(true, false, "wordsNAmbig").aschValue);

	console.log("F|T|T|T|"+DynAsch.conformitCount(false, true, "lineAmbig").aschValue);
	console.log("F|T|T|F|"+DynAsch.conformitCount(false, true, "wordsAmbig").aschValue);
	console.log("F|T|F|T|"+DynAsch.conformitCount(false, true, "lineNAmbig").aschValue);
	console.log("F|T|F|F|"+DynAsch.conformitCount(false, true, "wordsNAmbig").aschValue);

	console.log("F|F|T|T|"+DynAsch.conformitCount(false, false, "lineAmbig").aschValue);
	console.log("F|F|T|F|"+DynAsch.conformitCount(false, false, "wordsAmbig").aschValue);
	console.log("F|F|F|T|"+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue);
	console.log("F|F|F|F|"+DynAsch.conformitCount(false, false, "wordsNAmbig").aschValue);*/

	DynAsch.showCounterBlance();
	DynAsch.wordLinesFirstContainer();
	DynAsch.individVsRest();
	DynAsch.histogram();
	DynAsch.wordCountError();
	DynAsch.conditionCSV();
	DynAsch.individualConditionCSV();
}



DynAsch.showCounterBlance = function(){
	$(function ()  
					{
	   var dataSource = [
	    { state: "LA(R)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(true, true, "lineAmbig").aschValue+DynAsch.conformitCount(true, false, "lineAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(true, true, "lineAmbig").aschValue, 
	    	last: DynAsch.conformitCount(true, false, "lineAmbig").aschValue },
	    { state: "WA(R)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(true, true, "wordsAmbig").aschValue+DynAsch.conformitCount(true, false, "wordsAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(true, true, "wordsAmbig").aschValue, 
	    	last: DynAsch.conformitCount(true, false, "wordsAmbig").aschValue },
	    { state: "LnA(R)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(true, true, "lineNAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(true, true, "lineNAmbig").aschValue, 
	    	last: DynAsch.conformitCount(true, false, "lineNAmbig").aschValue },
	    { state: "WnA(R)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(true, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(true, false, "wordsNAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(true, true, "wordsNAmbig").aschValue, 
	    	last: DynAsch.conformitCount(true, false, "wordsNAmbig").aschValue },

	    { state: "LA(H)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(false, true, "lineAmbig").aschValue+DynAsch.conformitCount(false, false, "lineAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(false, true, "lineAmbig").aschValue, 
	    	last: DynAsch.conformitCount(false, false, "lineAmbig").aschValue },
	    { state: "WA(H)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(false, true, "wordsAmbig").aschValue+DynAsch.conformitCount(false, false, "wordsAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(false, true, "wordsAmbig").aschValue, 
	    	last: DynAsch.conformitCount(false, false, "wordsAmbig").aschValue },
	    { state: "LnA(H)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(false, true, "lineNAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(false, true, "lineNAmbig").aschValue, 
	    	last: DynAsch.conformitCount(false, false, "lineNAmbig").aschValue },
	    { state: "WnA(H)(Count, First, Last)", 
	    	counter: (DynAsch.conformitCount(false, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(false, false, "wordsNAmbig").aschValue)/2, 
	    	first: DynAsch.conformitCount(false, true, "wordsNAmbig").aschValue, 
	    	last: DynAsch.conformitCount(false, false, "wordsNAmbig").aschValue },
	];

	$("#chartContainer").dxChart({
	    dataSource: dataSource,
	    commonSeriesSettings: {
	        argumentField: "state",
	        type: "bar",
	        hoverMode: "allArgumentPoints",
	        selectionMode: "allArgumentPoints",
	        label: {
	            visible: true,
	            format: "fixedPoint",
	            precision: 0
	        }
	    },
	    series: [
	        { valueField: "counter", name: "counter" },
	        { valueField: "first", name: "first" },
	        { valueField: "last", name: "last" }
	    ],
	    title: "Was counter balancing usefull?",
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    pointClick: function (point) {
	        this.select();
	    }
	});
	}

	);
}

DynAsch.wordLinesFirstContainer = function(){
	$(function ()  
					{
	   var dataSource = [
	    { state: "ambig Lines", 
	    	ro:	(DynAsch.conformitCount(true, true, "lineAmbig").aschValue+DynAsch.conformitCount(true, false, "lineAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineAmbig").aschValue+DynAsch.conformitCount(false, false, "lineAmbig").aschValue)/2
	    },
	    { state: "non-ambig Lines", 
	    	ro: (DynAsch.conformitCount(true, true, "lineNAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineNAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2
	    },

	    { state: "ambig Words", 
	    	ro: (DynAsch.conformitCount(true, true, "wordsAmbig").aschValue+DynAsch.conformitCount(true, false, "wordsAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "wordsAmbig").aschValue+DynAsch.conformitCount(false, false, "wordsAmbig").aschValue)/2
	    },
	    { state: "non-ambig Words", 
	    	ro: (DynAsch.conformitCount(true, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(true, false, "wordsNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(false, false, "wordsNAmbig").aschValue)/2
	    }
	];

	$("#wordLinesFirstContainer").dxChart({
	    dataSource: dataSource,
	    commonSeriesSettings: {
	        argumentField: "state",
	        type: "spline",
	        hoverMode: "allArgumentPoints",
	        selectionMode: "allArgumentPoints",
	        label: {
	            visible: true,
	            format: "fixedPoint",
	            precision: 0
	        }
	    },
	    series: [
	        { valueField: "ro", name: "robot" },
	        { valueField: "hu", name: "human" }
	    ],
	    title: "Robots vs. Humans",
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    pointClick: function (point) {
	        this.select();
	    }
	});
	}

	);
}

DynAsch.individVsRest = function(){
	$(function ()  
					{
	   var dataSource = [
	    { state: "ambig Lines", 
	    	in: 28,
	    	ro: (DynAsch.conformitCount(true, true, "lineAmbig").aschValue+DynAsch.conformitCount(true, false, "lineAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineAmbig").aschValue+DynAsch.conformitCount(false, false, "lineAmbig").aschValue)/2
	    },
	    { state: "non-ambig Lines", 
	    	in: 2,
	    	ro: (DynAsch.conformitCount(true, true, "lineNAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineNAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2
	    }
	];

	$("#individLinesContainer").dxChart({
		tooltip: {
	        enabled: true
	    },
	    dataSource: dataSource,
	    commonSeriesSettings: {
	        argumentField: "state",
	        type: "spline",
	        hoverMode: "allArgumentPoints",
	        selectionMode: "allArgumentPoints",
	        label: {
	            visible: true,
	            format: "fixedPoint",
	            precision: 0
	        }
	    },
	    series: [
	    	{ valueField: "in", name: "individual" },
	        { valueField: "ro", name: "robot" },
	        { valueField: "hu", name: "human" }
	    ],
	    title: "Individuals vs. Robots vs. Humans - Lines",
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    pointClick: function (point) {
	        this.select();
	    }
	});
	}

	);
}

DynAsch.histogram = function(){
	$(function ()  
					{
	   var dataSource = [];

	for(var a=1; a<14; a++){
		dataSource.push({ state: ""+a, 
	    	alr: (DynAsch.conformitCount(true, true, "lineAmbig").errorTotal(a)+DynAsch.conformitCount(true, false, "lineAmbig").errorTotal(a))/2,
	    	nalr: (DynAsch.conformitCount(true, true, "lineNAmbig").errorTotal(a)+DynAsch.conformitCount(true, false, "lineNAmbig").errorTotal(a))/2,
	    	alh: (DynAsch.conformitCount(false, true, "lineAmbig").errorTotal(a)+DynAsch.conformitCount(false, false, "lineAmbig").errorTotal(a))/2,
	    	nalh: (DynAsch.conformitCount(false, true, "lineNAmbig").errorTotal(a)+DynAsch.conformitCount(false, false, "lineNAmbig").errorTotal(a))/2,
	    	awr: (DynAsch.conformitCount(true, true, "wordsAmbig").errorTotal(a)+DynAsch.conformitCount(true, false, "wordsAmbig").errorTotal(a))/2,
	    	nawr: (DynAsch.conformitCount(true, true, "wordsNAmbig").errorTotal(a)+DynAsch.conformitCount(true, false, "wordsNAmbig").errorTotal(a))/2,
	    	awh: (DynAsch.conformitCount(false, true, "wordsAmbig").errorTotal(a)+DynAsch.conformitCount(false, false, "wordsAmbig").errorTotal(a))/2,
	    	nawh: (DynAsch.conformitCount(false, true, "wordsNAmbig").errorTotal(a)+DynAsch.conformitCount(false, false, "wordsNAmbig").errorTotal(a))/2,
	    });	
	}

	$("#histrogramContainer").dxChart({
		tooltip: {
	        enabled: true
	    },
	    dataSource: dataSource,
	    commonSeriesSettings: {
	        argumentField: "state",
	        type: "spline",
	        hoverMode: "allArgumentPoints",
	        selectionMode: "allArgumentPoints",
	        label: {
	            visible: false,
	            format: "fixedPoint",
	            precision: 0
	        }
	    },
	    series: [
	    	{ valueField: "alr", name: "ambig lines robot" },
	        { valueField: "nalr", name: "non-ambig lines robot" },
	        { valueField: "alh", name: "ambig lines humans" },
	        { valueField: "nalh", name: "non-ambig lines humans" },
	        { valueField: "awr", name: "ambig words robot" },
	        { valueField: "nawr", name: "non-ambig words robot" },
	        { valueField: "awh", name: "ambig words humans" },
	        { valueField: "nawh", name: "non-ambig words humans" },
	    ],
	    title: "Absolute number per trial",
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    pointClick: function (point) {
	        this.select();
	    }
	});
	}

	);
}


DynAsch.wordCountError = function(){

	//console.log(DynAsch.wordError(true, true));
	$(function ()  
					{
	   var dataSource = [
	    { state: "ambig word (R)", 
	    	er0: DynAsch.wordError(true, true).error0,
	    	er1: DynAsch.wordError(true, true).error1,
	    	er2: DynAsch.wordError(true, true).error2
	    },
	    { state: "non-ambig word (R)", 
	    	er0: DynAsch.wordError(true, false).error0,
	    	er1: DynAsch.wordError(true, false).error1,
	    	er2: DynAsch.wordError(true, false).error2
	    },
	    { state: "ambig word (H)", 
	    	er0: DynAsch.wordError(false, true).error0,
	    	er1: DynAsch.wordError(false, true).error1,
	    	er2: DynAsch.wordError(false, true).error2
	    },
	    { state: "non-ambig word (H)", 
	    	er0: DynAsch.wordError(false, false).error0,
	    	er1: DynAsch.wordError(false, false).error1,
	    	er2: DynAsch.wordError(false, false).error2
	    }
	];

	$("#wordCountError").dxChart({
		tooltip: {
	        enabled: true
	    },
	    dataSource: dataSource,
	    commonSeriesSettings: {
	        argumentField: "state",
	        type: "bar",
	        hoverMode: "allArgumentPoints",
	        selectionMode: "allArgumentPoints",
	        label: {
	            visible: true,
	            format: "fixedPoint",
	            precision: 0
	        }
	    },
	    series: [
	    	{ valueField: "er0", name: "no repeat" },
	        { valueField: "er1", name: "one repeat" },
	        { valueField: "er2", name: "two repeats" }
	    ],
	    title: "repetition error rate - words",
	    legend: {
	        verticalAlignment: "bottom",
	        horizontalAlignment: "center"
	    },
	    pointClick: function (point) {
	        this.select();
	    }
	});
	}

	);
}

/**
 * [wordError description]
 * @param  {[type]} robotCondtion true, false
 * @param  {[type]} wordsAmbig    true, false (false is wordsNAmbig)
 * @return {[type]}               [description]
 */
DynAsch.wordError = function(robotCondtion, wordsAmbig){
	

	var lineAmbig = "wordsAmbig";
	var _retObj = {
		"error0": 0,
		"error1": 0,
		"error2": 0,
	};
	var wordTemp = {};


	if(!wordsAmbig){
		lineAmbig = "wordsNAmbig";
	}

//console.log('WordError: ',robotCondtion, lineAmbig);


	for (a in groupExperimentResults){

		if(groupExperimentResults[a]["res"]["isRobotCondition"]==robotCondtion){

			var l = groupExperimentResults[a]["res"][lineAmbig];

			var mySum = 0;
			for(n in l){
			
				if(wordTemp[l[n].word]==undefined){
					//Add object 
					wordTemp[l[n].word] = {
						"error0":0,
						"error1":0,
						"error2":0,
						"total0":0,
						"total1":0,
						"total2":0
					};

				}

				//Here add stuff
				//console.log(l[n]);	

				if(l[n].hearCount==0){
					wordTemp[l[n].word].total0 = wordTemp[l[n].word].total0+1;
					if(l[n].res){
						wordTemp[l[n].word].error0 = wordTemp[l[n].word].error0+1;
					}
				}else if(l[n].hearCount==1){
					wordTemp[l[n].word].total1 = wordTemp[l[n].word].total1+1;
					if(l[n].res){
						wordTemp[l[n].word].error1 = wordTemp[l[n].word].error1+1;
					}
				} else if(l[n].hearCount==2){
					wordTemp[l[n].word].total2 = wordTemp[l[n].word].total2+1;
					if(l[n].res){
						wordTemp[l[n].word].error2 = wordTemp[l[n].word].error2+1;
					}
				}
			}
			
		}


	}

	_retObj['words'] = wordTemp;

	var _tempErro0 = 0;
	var _tempTotal0 = 0;
	var _tempErro1 = 0;
	var _tempTotal1 = 0;
	var _tempErro2 = 0;
	var _tempTotal2 = 0;

	for (a in wordTemp){
		//console.log(a);

		_tempErro0 = _tempErro0 + wordTemp[a].error0;
		_tempTotal0 = _tempTotal0 + wordTemp[a].total0;
		_tempErro1 = _tempErro1 + wordTemp[a].error1;
		_tempTotal1 = _tempTotal1 + wordTemp[a].total1;
		_tempErro2 = _tempErro2 + wordTemp[a].error2;
		_tempTotal2 = _tempTotal2 + wordTemp[a].total2;
	}

	var t = (_tempErro0*100/_tempTotal0+_tempErro1*100/_tempTotal1+_tempErro2*100/_tempTotal2)/3;

	_retObj['error0'] = _tempErro0*100/_tempTotal0;
	_retObj['error1'] = _tempErro1*100/_tempTotal1;
	_retObj['error2'] = _tempErro2*100/_tempTotal2;

	//console.log(_tempErro0,_tempTotal0,_tempErro0*100/_tempTotal0);
	//console.log(_tempErro1,_tempTotal1,_tempErro1*100/_tempTotal1);
	//console.log(_tempErro2,_tempTotal2,_tempErro2*100/_tempTotal2);
	//console.log(t);
	//console.log(_retObj);

	return _retObj;
}

/**
 * [conformitCount description]
 * @param  {string} robotCondtion true, false
 * @param  {string} isLinesFirst true, false
 * @param  {string} ambig yes, no, both
 * @param  {string} lineAmbig  lineAmbig, lineNAmbig, wordsAmbig, wordsNAmbig
 * @return {string}       error rate
 */
DynAsch.conformitCount = function(robotCondtion,first,lineAmbig){
	//console.log("conformitCount: ",robotCondtion,first,lineAmbig);

	var anAsch = {
		sum : 0,
		errorRate : 0,
		maxErrors: 0,
		aschValue : 0,
		innerAsch : {
			//"total":0,
			"0":0,
			"1":0,
			"2":0,
			"3":0,
			"4":0,
			"5":0,
			"6":0,
			"7":0,
			"8":0,
			"9":0,
			"10":0,
			"11":0,
			"12":0,
			"13":0,
			"14":0,
			"15":0,
		}
	} 

	anAsch.errorTotal = function(nr){
		return this.innerAsch[nr]*nr;
	}

	
	
	
	for (a in groupExperimentResults){

		if(groupExperimentResults[a]["res"]["isRobotCondition"]==robotCondtion && groupExperimentResults[a]["res"]["isLinesFirst"]==first){

			var l = groupExperimentResults[a]["res"][lineAmbig];
			var mySum = 0;
			for(n in l){
				anAsch.maxErrors+=1;
				
				if(l[n].res){
					mySum=mySum+1;
				}
			}

			anAsch.innerAsch[mySum]+=1

			anAsch.sum+=mySum;
		}

	}



	var _return = 0;
	for(a in anAsch.innerAsch){
		anAsch.errorRate += (a * anAsch.innerAsch[a]);
	}


	anAsch.aschValue = Math.round(anAsch.errorRate*100/anAsch.maxErrors);

	//console.log(anAsch.totalhumanLineAmbig());

	return anAsch;
}



DynAsch.conditionCSV = function(){



	var obj = {


	};


	var arrBla = [];
	arrBla.push(DynAsch.conformitCount(true, true, "lineAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(true, false, "lineAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(true, true, "lineNAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(true, false, "lineNAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(true, true, "wordsAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(true, false, "wordsAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(true, true, "wordsNAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(true, false, "wordsNAmbig").innerAsch);


	arrBla.push(DynAsch.conformitCount(false, true, "lineAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(false, false, "lineAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(false, true, "lineNAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(false, false, "lineNAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(false, true, "wordsAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(false, false, "wordsAmbig").innerAsch);

	arrBla.push(DynAsch.conformitCount(false, true, "wordsNAmbig").innerAsch);
	arrBla.push(DynAsch.conformitCount(false, false, "wordsNAmbig").innerAsch);


	var myCSV = "err, a, b, c, d, e, f, g, h\n";

	//console.log(arrBla[0]);

	for(a in arrBla[0]){
		//console.log(a);

		var t = "";
		
		var k = 0
		for(var i = 0; i<16; i = i+2){
			//console.log(i, arrBla[i]);

			t += (arrBla[i][a]+arrBla[i+1][a] ); 

			if(i<14){
				t+=", ";
			}

			k++;
		}

		//t=a+", "+t+"\t";

		myCSV += a+", "+t+"\n"
		/*
		for(k in arrBla){
			//console.log(k,arrBla[k][a]);
			t += arrBla[k][a]+", "; 
		}*/

		
	}
	//console.log(myCSV);

}

DynAsch.individualConditionCSV = function(){
	console.log("individualConditionCSV");

	var csv = "participtant, al, nal, aw, naw, robot\n";

	for (a in groupExperimentResults){
		//console.log(groupExperimentResults[a].res);

		var lineAmbig = groupExperimentResults[a].res.lineAmbig;
		var lineNAmbig = groupExperimentResults[a].res.lineNAmbig;
		var wordsAmbig = groupExperimentResults[a].res.wordsAmbig;
		var wordsNAmbig = groupExperimentResults[a].res.wordsNAmbig;

		var countlineAmbig = 0;
		for(k in lineAmbig){
			if(lineAmbig[k].res){
				countlineAmbig++;
			}
		}

		var countlineNAmbig = 0;
		for(k in lineNAmbig){
			if(lineNAmbig[k].res){
				countlineNAmbig++;
			}
		}

		var countwordsAmbig = 0;
		for(k in wordsAmbig){
			if(wordsAmbig[k].res){
				countwordsAmbig++;
			}
		}

		var countwordsNAmbig = 0;
		for(k in wordsNAmbig){
			if(wordsNAmbig[k].res){
				countwordsNAmbig++;
			}
		}

		csv+=""+groupExperimentResults[a].res.part+", "+countlineAmbig+", "+countlineNAmbig+", "+countwordsAmbig+", "+countwordsNAmbig+", "+groupExperimentResults[a].res.isRobotCondition+"\n";
		console.log(groupExperimentResults[a].res.part, groupExperimentResults[a].res.isRobotCondition, countlineAmbig, countlineNAmbig, countwordsAmbig, countwordsNAmbig);

	}

	console.log(csv);
}