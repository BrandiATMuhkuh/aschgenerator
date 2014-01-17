var defaults = {
				
	//Boolean - If we show the scale above the chart data			
	scaleOverlay : true,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 20,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 5,
	//Number - The scale starting value
	scaleStartValue : 0.0,

	//String - Colour of the scale line	
	scaleLineColor : "rgba(2,0,0,1)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 2,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",	
	
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,
	
	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	
	//Number - Width of the grid lines
	scaleGridLineWidth : 20,	

	//Boolean - If there is a stroke on each bar	
	barShowStroke : true,
	
	//Number - Pixel width of the bar stroke	
	barStrokeWidth : 2,
	
	//Number - Spacing between each of the X value sets
	barValueSpacing : 10,
	
	//Number - Spacing between data sets within X values
	barDatasetSpacing : 1,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
	
}

var DynAsch={
};

DynAsch.main = function(){
	console.log("Start DynAsch");

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
	console.log("F|F|F|F|"+DynAsch.conformitCount(false, false, "wordsNAmbig").aschValue);

	DynAsch.showCounterBlance();
	DynAsch.wordLinesFirstContainer();
	DynAsch.individVsRest();
	DynAsch.histogram();
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
	    	ro: (DynAsch.conformitCount(true, true, "lineAmbig").aschValue+DynAsch.conformitCount(true, false, "lineAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineAmbig").aschValue+DynAsch.conformitCount(false, false, "lineAmbig").aschValue)/2
	    },
	    { state: "non-ambig Lines", 
	    	ro: (DynAsch.conformitCount(true, true, "lineNAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "lineNAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2
	    },

	    { state: "ambig Words", 
	    	ro: (DynAsch.conformitCount(true, true, "wordsAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "wordsAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2
	    },
	    { state: "non-ambig Words", 
	    	ro: (DynAsch.conformitCount(true, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(true, false, "lineNAmbig").aschValue)/2,
	    	hu: (DynAsch.conformitCount(false, true, "wordsNAmbig").aschValue+DynAsch.conformitCount(false, false, "lineNAmbig").aschValue)/2
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



