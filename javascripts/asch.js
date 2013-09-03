//console.log("juhu", individualLineTest, groupTestScripts, groupExperimentResults);

var Asch={
	
	lineAmbig : {
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
	lineNAmbig : {
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
	wordsAmbig : {
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
	wordsNAmbig : {
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
	

};

Asch.totalLineAmbig = function(){
	var _return = 0;
	for(a in this.lineAmbig){
		_return += (a * this.lineAmbig[a]);
	}

	return _return;
}

Asch.totalLineNAmbig = function(){
	var _return = 0;
	for(a in this.lineNAmbig){
		_return += (a * this.lineNAmbig[a]);
	}

	return _return;
}

Asch.totalWordsAmbig = function(){
	var _return = 0;
	for(a in this.wordsAmbig){
		_return += (a * this.wordsAmbig[a]);
	}

	return _return;
}

Asch.totalWordsNAmbig = function(){
	var _return = 0;
	for(a in this.wordsNAmbig){
		_return += (a * this.wordsNAmbig[a]);
	}

	return _return;
}


Asch.main = function() {
	console.log(groupExperimentResults.length);


	for (a in groupExperimentResults){
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
		Asch.lineAmbig[_lAt]+=1;
		groupExperimentResults[a].res.lAt=_lAt;
		//Asch.lineAmbig.total+=_lAt;
		// add here how many mistakes part one made, ...

		for(b in _lineNAmbig){
			if(_lineNAmbig[b].res){
				_lNAt+=1;				
			}
		}
		Asch.lineNAmbig[_lNAt]+=1;
		groupExperimentResults[a].res.lNAt=_lNAt;
		//Asch.lineNAmbig.total+=_lNAt;

		for(b in _wordsAmbig){
			if(_wordsAmbig[b].res){
				_wAt+=1;
			}
		}
		Asch.wordsAmbig[_wAt]+=1;
		groupExperimentResults[a].res.wAt=_wAt;
		//Asch.wordsAmbig.total+=_wAt;

		for(b in _wordsNAmbig){
			if(_wordsNAmbig[b].res){
				_wNAt+=1;
			}
		}
		Asch.wordsNAmbig[_wNAt]+=1;
		groupExperimentResults[a].res.wNAt=_wNAt;
		//Asch.wordsNAmbig.total+=_wNAt;


	}


	this.fillPeopleTable();
}


function test(){
	var all = 0;
	for(k in Asch["lineAmbig"]){
		
		if(k!="total"){
			all += (k*Asch["lineAmbig"][k]);
		}
		
	}
	console.log(all);
}


Asch.fillPeopleTable = function(){
	var table = document.getElementById("peopleTable");

	for (a in groupExperimentResults){
		var row=table.insertRow(-1);
		row.insertCell(0).innerHTML=groupExperimentResults[a].res.part;
		row.insertCell(1).innerHTML=groupExperimentResults[a].res.lAt;
		row.insertCell(2).innerHTML=groupExperimentResults[a].res.lNAt;
		row.insertCell(3).innerHTML=groupExperimentResults[a].res.wAt;
		row.insertCell(4).innerHTML=groupExperimentResults[a].res.wNAt;

		row.insertCell(5).innerHTML=groupExperimentResults[a].res.survey.Q1;
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
		
		//cell1.innerHTML=groupExperimentResults[a].res.part;
		//cell2.innerHTML=groupExperimentResults[a].res.survey.Q1;
		//console.log(groupExperimentResults[a].res);
	}

	//add sum
	var peopleTableSum = document.getElementById("peopleTableSum");
	peopleTableSum.rows[0].cells[1].innerHTML=""+Asch.totalLineAmbig();
	peopleTableSum.rows[0].cells[2].innerHTML=""+Asch.totalLineNAmbig();
	peopleTableSum.rows[0].cells[3].innerHTML=""+Asch.totalWordsAmbig();
	peopleTableSum.rows[0].cells[4].innerHTML=""+Asch.totalWordsNAmbig();
}


//Asch.main();
//Asch.fillPeopleTable();