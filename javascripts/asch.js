//console.log("juhu", individualLineTest, groupTestScripts, groupExperimentResults);

var Asch={
	
maxhumanMistakeCountLines : 0,
maxhumanMistakeCountWords : 0,
maxrobotMistakeCountLines : 0,
maxrobotMistakeCountWords : 0,

	humanLineAmbig : {
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
	},
	humanLineNAmbig : {
		//total:0,
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
	},
	humanWordsAmbig : {
		//total:0,
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
	},
	humanWordsNAmbig : {
		//total:0,
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
	},
	robotLineAmbig : {
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
	},
	robotLineNAmbig : {
		//total:0,
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
	},
	robotWordsAmbig : {
		//total:0,
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
	},
	robotWordsNAmbig : {
		//total:0,
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
	},
	
	nonambigIndividualLineList : [11,16,24,47,48,54,57,59,91,101,9,30,39,34,23],
	ambigIndividualLineList : [79,46,13,20,38,61,98,31,58,64,69,77,100,105,6]
};

Asch.totalhumanLineAmbig = function(){
	var _return = 0;
	for(a in this.humanLineAmbig){
		_return += (a * this.humanLineAmbig[a]);
	}

	return _return;
}

Asch.totalhumanLineNAmbig = function(){
	var _return = 0;
	for(a in this.humanLineNAmbig){
		_return += (a * this.humanLineNAmbig[a]);
	}

	return _return;
}

Asch.totalhumanWordsAmbig = function(){
	var _return = 0;
	for(a in this.humanWordsAmbig){

		_return += (a * this.humanWordsAmbig[a]);
	}

	return _return;
}

Asch.totalhumanWordsNAmbig = function(){
	var _return = 0;
	for(a in this.humanWordsNAmbig){
		_return += (a * this.humanWordsNAmbig[a]);
	}

	return _return;
}

Asch.totalrobotLineAmbig = function(){
	var _return = 0;
	for(a in this.robotLineAmbig){
		_return += (a * this.robotLineAmbig[a]);
	}

	return _return;
}

Asch.totalrobotLineNAmbig = function(){
	var _return = 0;
	for(a in this.robotLineNAmbig){
		_return += (a * this.robotLineNAmbig[a]);
	}

	return _return;
}

Asch.totalrobotWordsAmbig = function(){
	var _return = 0;
	for(a in this.robotWordsAmbig){

		_return += (a * this.robotWordsAmbig[a]);
	}

	return _return;
}

Asch.totalrobotWordsNAmbig = function(){
	var _return = 0;
	for(a in this.robotWordsNAmbig){
		_return += (a * this.robotWordsNAmbig[a]);
	}

	return _return;
}



Asch.main = function() {
	//console.log(groupExperimentResults.length);



	for (a in groupExperimentResults){
		if(groupExperimentResults[a].res.isRobotCondition==false){
			this.maxhumanMistakeCountLines += 1;
			this.maxhumanMistakeCountWords += 1;
			

			var _lineAmbig = groupExperimentResults[a].res.lineAmbig;
			var _lineNAmbig = groupExperimentResults[a].res.lineNAmbig;
			var _wordsAmbig = groupExperimentResults[a].res.wordsAmbig;
			var _wordsNAmbig = groupExperimentResults[a].res.wordsNAmbig;
			var _lAt=0, _lNAt=0, _wAt=0, _wNAt=0;
			

			//TODO Add excaption if something did not work out perfectly during the experiment
			for(b in _lineAmbig){
				if(_lineAmbig[b].res){
					_lAt+=1;				
				}
			}
			Asch.humanLineAmbig[_lAt]+=1;
			groupExperimentResults[a].res.lAt=_lAt;
			//Asch.lineAmbig.total+=_lAt;
			// add here how many mistakes part one made, ...

			for(b in _lineNAmbig){
				if(_lineNAmbig[b].res){
					_lNAt+=1;				
				}
			}
			Asch.humanLineNAmbig[_lNAt]+=1;
			groupExperimentResults[a].res.lNAt=_lNAt;
			//Asch.lineNAmbig.total+=_lNAt;
			
			for(b in _wordsAmbig){
				if(_wordsAmbig[b].res){
					_wAt+=1;
				}
			}
			Asch.humanWordsAmbig[_wAt]+=1;
			groupExperimentResults[a].res.wAt=_wAt;
			//Asch.wordsAmbig.total+=_wAt;

			for(b in _wordsNAmbig){
				if(_wordsNAmbig[b].res){
					_wNAt+=1;
				}
			}
			Asch.humanWordsNAmbig[_wNAt]+=1;
			groupExperimentResults[a].res.wNAt=_wNAt;
			//Asch.wordsNAmbig.total+=_wNAt;
			

		}else{
			this.maxrobotMistakeCountLines += 1;
			this.maxrobotMistakeCountWords += 1;
			var _lineAmbig = groupExperimentResults[a].res.lineAmbig;
			var _lineNAmbig = groupExperimentResults[a].res.lineNAmbig;
			var _wordsAmbig = groupExperimentResults[a].res.wordsAmbig;
			var _wordsNAmbig = groupExperimentResults[a].res.wordsNAmbig;
			var _lAt=0, _lNAt=0, _wAt=0, _wNAt=0;
			

			//TODO Add excaption if something did not work out perfectly during the experiment
			for(b in _lineAmbig){
				if(_lineAmbig[b].res){
					_lAt+=1;				
				}
			}
			Asch.robotLineAmbig[_lAt]+=1;
			groupExperimentResults[a].res.lAt=_lAt;
			//Asch.lineAmbig.total+=_lAt;
			// add here how many mistakes part one made, ...

			for(b in _lineNAmbig){
				if(_lineNAmbig[b].res){
					_lNAt+=1;				
				}
			}
			Asch.robotLineNAmbig[_lNAt]+=1;
			groupExperimentResults[a].res.lNAt=_lNAt;
			//Asch.lineNAmbig.total+=_lNAt;
			
			for(b in _wordsAmbig){
				if(_wordsAmbig[b].res){
					_wAt+=1;
				}
			}
			Asch.robotWordsAmbig[_wAt]+=1;
			groupExperimentResults[a].res.wAt=_wAt;
			//Asch.wordsAmbig.total+=_wAt;

			for(b in _wordsNAmbig){
				if(_wordsNAmbig[b].res){
					_wNAt+=1;
				}
			}
			Asch.robotWordsNAmbig[_wNAt]+=1;
			groupExperimentResults[a].res.wNAt=_wNAt;
			//Asch.wordsNAmbig.total+=_wNAt;
			

		}

	}

	this.maxrobotMistakeCountLines = this.maxrobotMistakeCountLines*15;
	this.maxrobotMistakeCountWords = this.maxrobotMistakeCountWords*15;
	this.maxhumanMistakeCountLines = this.maxhumanMistakeCountLines*15
	this.maxhumanMistakeCountWords = this.maxhumanMistakeCountWords*15;

	this.fillPeopleTable();
	//this.fillMistakesTable();
	//this.fillIndividualVsGroupLine();
	//Asch.fillAschVsUs();
}


function test(){
	var all = 0;
	for(k in Asch["humanLineAmbig"]){
		
		if(k!="total"){
			all += (k*Asch["humanLineAmbig"][k]);
		}
		
	}
	console.log(all);
}


Asch.fillPeopleTable = function(){
	var table = document.getElementById("peopleTable");
	var atLeastOne_lAt=0;
	var atLeastOne_lNAt=0;
	var atLeastOne_wAt=0;
	var atLeastOne_wNAt=0;

	for (a in groupExperimentResults){
		var row=table.insertRow(-1);
		row.insertCell(0).innerHTML=groupExperimentResults[a].res.part;
		row.insertCell(1).innerHTML=groupExperimentResults[a].res.lAt;
		row.insertCell(2).innerHTML=groupExperimentResults[a].res.lNAt;
		row.insertCell(3).innerHTML=groupExperimentResults[a].res.wAt;
		row.insertCell(4).innerHTML=groupExperimentResults[a].res.wNAt;

		row.insertCell(5).innerHTML=groupExperimentResults[a].res.survey.Q1;
		
		/*
		row.insertCell(6).innerHTML=(groupExperimentResults[a].res.survey.Q7==1) ? "Yes" : "No";
		row.insertCell(7).innerHTML=groupExperimentResults[a].res.survey.Q2_1;
		var _words="Other";
		if(groupExperimentResults[a].res.survey.Q3==1){
			_words="Undergraduate Student";
		}else if(groupExperimentResults[a].res.survey.Q3==2){
			_words="Postgraduate Student";
		}else if(groupExperimentResults[a].res.survey.Q3==3){
			_words="Staff Member";
		}

		row.insertCell(8).innerHTML=_words;
		row.insertCell(9).innerHTML=(groupExperimentResults[a].res.survey.Q10 != undefined) ? groupExperimentResults[a].res.survey.Q10 : "";
		*/
		//cell1.innerHTML=groupExperimentResults[a].res.part;
		//cell2.innerHTML=groupExperimentResults[a].res.survey.Q1;
		//console.log(groupExperimentResults[a].res);
		
		if(groupExperimentResults[a].res.lAt>0){
			atLeastOne_lAt+=1;
		}

		if(groupExperimentResults[a].res.lNAt>0){
			atLeastOne_lNAt+=1;
		}

		if(groupExperimentResults[a].res.wAt>0){
			atLeastOne_wAt+=1;
		}

		if(groupExperimentResults[a].res.wNAt>0){
			atLeastOne_wNAt+=1;
		}
	}

	//add sum
	var peopleTableSum = document.getElementById("peopleTableSum");
	peopleTableSum.rows[0].cells[1].innerHTML=""+Asch.totalhumanLineAmbig();
	peopleTableSum.rows[0].cells[2].innerHTML=""+Asch.totalhumanLineNAmbig();
	peopleTableSum.rows[0].cells[3].innerHTML=""+Asch.totalhumanWordsAmbig();
	peopleTableSum.rows[0].cells[4].innerHTML=""+Asch.totalhumanWordsNAmbig();


	//add min one
	var peopleTableSum = document.getElementById("peopleTableMinOne");
	peopleTableSum.rows[0].cells[1].innerHTML=""+atLeastOne_lAt;
	peopleTableSum.rows[0].cells[2].innerHTML=""+atLeastOne_lNAt;
	peopleTableSum.rows[0].cells[3].innerHTML=""+atLeastOne_wAt;
	peopleTableSum.rows[0].cells[4].innerHTML=""+atLeastOne_wNAt;
}

Asch.fillMistakesTable = function(){
	//console.log("wir kuemmern uns um den rock");
	var table = document.getElementById("mistakesTable");

	for(a in this.humanLineAmbig){
		//console.log(a);
		table.rows[a].insertCell(-1).innerHTML=this.humanLineAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.humanLineNAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.humanWordsAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.humanWordsNAmbig[a];
	}

	for(a in this.robotLineAmbig){
		//console.log(a);
		table.rows[a].insertCell(-1).innerHTML=this.robotLineAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.robotLineNAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.robotWordsAmbig[a];
		table.rows[a].insertCell(-1).innerHTML=this.robotWordsNAmbig[a];
	}

	var total = document.getElementById("mistakesTableTotal");
	total.rows[0].cells[1].innerHTML=Asch.totalhumanLineAmbig()+"("+Math.round(Asch.totalhumanLineAmbig()*100/Asch.maxhumanMistakeCountLines)+"%)";
	total.rows[0].cells[2].innerHTML=Asch.totalhumanLineNAmbig()+"("+Math.round(Asch.totalhumanLineNAmbig()*100/Asch.maxhumanMistakeCountLines)+"%)";
	total.rows[0].cells[3].innerHTML=Asch.totalhumanWordsAmbig()+"("+Math.round(Asch.totalhumanWordsAmbig()*100/Asch.maxhumanMistakeCountWords)+"%)";
	total.rows[0].cells[4].innerHTML=Asch.totalhumanWordsNAmbig()+"("+Math.round(Asch.totalhumanWordsNAmbig()*100/Asch.maxhumanMistakeCountWords)+"%)";

	total.rows[0].cells[5].innerHTML=Asch.totalrobotLineAmbig()+"("+Math.round(Asch.totalrobotLineAmbig()*100/Asch.maxrobotMistakeCountLines)+"%)";
	total.rows[0].cells[6].innerHTML=Asch.totalrobotLineNAmbig()+"("+Math.round(Asch.totalrobotLineNAmbig()*100/Asch.maxrobotMistakeCountLines)+"%)";
	total.rows[0].cells[7].innerHTML=Asch.totalrobotWordsAmbig()+"("+Math.round(Asch.totalrobotWordsAmbig()*100/Asch.maxrobotMistakeCountLines)+"%)";
	total.rows[0].cells[8].innerHTML=Asch.totalrobotWordsNAmbig()+"("+Math.round(Asch.totalrobotWordsNAmbig()*100/Asch.maxrobotMistakeCountLines)+"%)";


	//draw graph
	//Get the context of the canvas element we want to select
	var ctx = document.getElementById("myChart").getContext("2d");

	var data = {
		labels : ["LA(H)","LnA(H)","WA(H)","WnA(H)","LA(R)","LnA(R)","WA(R)","WnA(R)"],
		datasets : [
			{
				fillColor : "#ccc",
				strokeColor : "#232323",
				data : [
					Math.round(Asch.totalhumanLineAmbig()*100/Asch.maxhumanMistakeCountLines),
					Math.round(Asch.totalhumanLineNAmbig()*100/Asch.maxhumanMistakeCountLines),
					Math.round(Asch.totalhumanWordsAmbig()*100/Asch.maxhumanMistakeCountWords),
					Math.round(Asch.totalhumanWordsNAmbig()*100/Asch.maxhumanMistakeCountWords),
					Math.round(Asch.totalrobotLineAmbig()*100/Asch.maxrobotMistakeCountLines),
					Math.round(Asch.totalrobotLineNAmbig()*100/Asch.maxrobotMistakeCountLines),
					Math.round(Asch.totalrobotWordsAmbig()*100/Asch.maxrobotMistakeCountWords),
					Math.round(Asch.totalrobotWordsNAmbig()*100/Asch.maxrobotMistakeCountWords)]
			}/*,
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [28,48,40,19,96,27,100]
			}*/
		]
	};


	var myNewChart = new Chart(ctx).Bar(data);
}



Asch.percentOfNonAmbigIndividualLineTest = function(){
	var _ret=0;
	var _tempUCount = {};

	//Asch.nonambigIndividualLineList.indexOf(13);
	//individualLineTest
	for(a in individualLineTest){		
		_tempUCount[individualLineTest[a].userid]=1;
		if(individualLineTest[a].result != individualLineTest[a].correct){
			//console.log("Errs");
			if(Asch.nonambigIndividualLineList.indexOf(individualLineTest[a].slidenr) != -1){
				_ret+=1;
			}
		}
	}
	var _usrCount = 0;
	for(a in _tempUCount){
		_usrCount+=1;
	}
	//console.log(_usrCount,_tempUCount);
	return Math.round(_ret*100/(_usrCount*Asch.nonambigIndividualLineList.length));
}

Asch.percentOfAmbigIndividualLineTest = function(){
	var _ret=0;
	var _tempUCount = {};

	//Asch.nonambigIndividualLineList.indexOf(13);
	//individualLineTest
	for(a in individualLineTest){
		_tempUCount[individualLineTest[a].userid]=1;
		if(individualLineTest[a].result != individualLineTest[a].correct){
			//console.log("Errs");
			if(Asch.ambigIndividualLineList.indexOf(individualLineTest[a].slidenr) != -1){
				_ret+=1;
				
			}
		}
	}
	var _usrCount = 0;
	for(a in _tempUCount){
		_usrCount+=1;
	}
	return Math.round(_ret*100/(_usrCount*Asch.ambigIndividualLineList.length));
}

Asch.fillIndividualVsGroupLine = function(){
	//Asch.percentOfAmbigIndividualLineTest
	//Asch.percentOfNonAmbigIndividualLineTest
	////draw graph
	//Get the context of the canvas element we want to select
	var ctx = document.getElementById("indVsGroupLine").getContext("2d");

	var data = {
		labels : ["Individual Ambiguous","Group Ambiguous","Individual non-Ambiguous","group non-Ambiguous"],
		datasets : [
			{
				fillColor : "#ccc",
				strokeColor : "#232323",
				data : [
					Math.round(Asch.percentOfAmbigIndividualLineTest()),
					Math.round(Asch.totalhumanLineAmbig()*100/Asch.maxhumanMistakeCountLines),
					Math.round(Asch.percentOfNonAmbigIndividualLineTest()),
					Math.round(Asch.totalhumanLineNAmbig()*100/Asch.maxhumanMistakeCountLines),
					]
			}/*,
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [28,48,40,19,96,27,100]
			}*/
		]
	};


	var myNewChart = new Chart(ctx).Bar(data);
}

Asch.fillAschVsUs = function(){
	var ctx = document.getElementById("aschVsUs").getContext("2d");

	var data = {
		labels : ["Individual","Robots","Asch"],
		datasets : [
			{
				fillColor : "#ccc",
				strokeColor : "#232323",
				data : [
					Math.round(Asch.percentOfNonAmbigIndividualLineTest()),
					Math.round(Asch.totalhumanLineNAmbig()*100/Asch.maxhumanMistakeCountLines),
					32
					]
			},
		]
	};
	var myNewChart = new Chart(ctx).Bar(data);
}

//Asch.main();
//Asch.fillPeopleTable();