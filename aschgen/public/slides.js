window.mySlides = [];
window.mySlidecount = 0;
window.myCsv = "s, n, c, \n";



/**
 * this will read the configSlides json file and generate the slides.
 */
function slideGenerator () {

	for(var i = 0; i < configSlides.length; i++){
		
		switch(window.configSlides[i].type){



			case "randAschList":
				var ashList = shuffle(window.configSlides[i].list);

				for (var k = 0; k < ashList.length; k++){
					
					var answernr = 0;
					if(ashList[k].answer == ashList[k].v2){
						answernr = 1;
					}else if(ashList[k].answer == ashList[k].v3){
						answernr = 2;
					}


					var carr = [Math.abs(ashList[k].v1 - ashList[k].answer),
					Math.abs(ashList[k].v2 - ashList[k].answer),
					Math.abs(ashList[k].v3 - ashList[k].answer)];
					var samllestNr = 0;
					if(window.configSlides[i].hardEasy=="hard"){
						//Find the closest one as answer
						var smallest = carr[samllestNr];

						for(a=1; a < carr.length; a+=1){
							if((carr[a] < carr[samllestNr] && carr[a] != 0) || carr[samllestNr] == 0){
								samllestNr=a;
							}
						}
						//console.log(samllestNr,carr);
					}else if(window.configSlides[i].hardEasy=="easy"){
						//Find the non-closest one as answer
						
						//Find the closest one as answer
						var smallest = carr[samllestNr];

						for(a=1; a < carr.length; a+=1){
							if((carr[a] > carr[samllestNr] && carr[a] != 0) || carr[samllestNr] == 0){
								samllestNr=a;
							}
						}
						//console.log(samllestNr,carr);
					}
					//console.log(samllestNr,carr);
					
					
					for (var t = 0; t < 5; t++){

						

						window.mySlides.push({
							type : "drawAsch",
						  	user : t,
						  	v1 : ashList[k].v1,
						  	v2 : ashList[k].v2,
						  	v3 : ashList[k].v3,
						  	answer : ashList[k].answer,
						  	'answernr': answernr,
						  	roboAnswer: samllestNr,
						  	"loudRobot" : ashList[k].loudRobot
						});
					}


					//console.log("sayWhat: ", window.mySlides.length,samllestNr);
					window.myCsv += ""+(window.mySlides.length-1)+", "+samllestNr+", ,\n";
				}

			break;

			case "randAsch":
				for (var k = 0; k < window.configSlides[i].count; k++){
					var rightAnwer = Math.floor((Math.random()*3));
					var aschValues = [];
					aschValues.push(Math.random());
					aschValues.push(Math.random());
					aschValues.push(Math.random());
					for (var t = 0; t < 5; t++){
						window.mySlides.push({
							type : "drawAsch",
						  	user : t,
						  	v1 : aschValues[0],
						  	v2 : aschValues[1],
						  	v3 : aschValues[2],
						  	answer : aschValues[rightAnwer]
						});
					}
				}
			break;


			case "deltaAsch":
				var rightAnwer = Math.floor((Math.random()*3));
				var aschValues = [];
				aschValues.push(Math.random());


				//Value two
				var v2 = Math.random();
				while(Math.abs(v2-aschValues[0]) > window.configSlides[i].delta){
					v2 = Math.random();
				}
				aschValues.push(v2);

				//Value three
				var v3 = Math.random();
				while(Math.abs(v3-aschValues[0]) > window.configSlides[i].delta){
					v3 = Math.random();
				}
				aschValues.push(v3);

				for (var t = 0; t < 5; t++){
					window.mySlides.push({
						type : "drawAsch",
					  	user : t,
					  	v1 : aschValues[0],
					  	v2 : aschValues[1],
					  	v3 : aschValues[2],
					  	answer : aschValues[rightAnwer]
					});

					if(!configUser.solo)
						t=5;
				}


			break;



			case "visualAsch":

				var visualArray = new Array();

				var stepSize = 0.025;
				var a=3*stepSize;
				var b=2*stepSize;
				var n=stepSize;

				for (var abc = 0; abc < 300; abc+=1) {

					if(a != (b+2*stepSize) && a != n && b != n){


						var slideshuff = new Array();
						slideshuff.push(a);
						slideshuff.push(b);
						slideshuff.push(n);
						slideshuff = shuffle(slideshuff);

						visualArray.push({
							type : "drawAsch",
						  	user : k,
						  	v1 : slideshuff[0],
						  	v2 : slideshuff[1],
						  	v3 : slideshuff[2],
						  	answer : 1,
						  	answernr: 0
						});
					}

					if(a>=(1-stepSize) && b>=(1-2*stepSize) && n<(1-stepSize)){
						n+=stepSize;
					}

					if(a>=(1-stepSize) && b<(1-2*stepSize)){
						b+=stepSize;
					}

					if(a<(1-stepSize)){
						a+=stepSize;
					}

					
				};



				
				var abc = 0;
				for (var d = 0; d < visualArray.length; d++) {
					
					if (abc===0) {
						visualArray[d].answer=visualArray[d].v1;
					}else if (abc===1) {
						visualArray[d].answer=visualArray[d].v2;
					}if (abc===2) {
						visualArray[d].answer=visualArray[d].v3;
					}

					visualArray[d].answernr = abc;

					abc+=1;
					if (abc>2){
						abc = 0;
					}
				};

				var visualArray = shuffle(visualArray);

				for(var k = 0; k < visualArray.length; k++){
					window.mySlides.push(visualArray[k]);

				}

			break;

			case "randWords":					
				var sArray = shuffle(window.configSlides[i].words);

				for (var t = 0; t < 4; t++){
					window.mySlides.push({
						type : "drawWord",
					  	user : t,
						v1 : sArray[t].word,
						sound : sArray[t].sound,
					});
				}

				window.mySlides.push({
					type : "drawWord",
				  	user : t,
					v1 : window.configSlides[i].human.word,
					sound : window.configSlides[i].human.sound,
				});

				
			break;


			case "simpleWords":
				var sArray = shuffle(window.configSlides[i].list);

				for (var k = 0; k < sArray.length; k++) {
					
					var innerArray = shuffle(sArray[k].actors)
					innerArray.push(sArray[k].participant);

					for (var j = 0; j < innerArray.length; j++) {
						window.mySlides.push({
							type : "drawManyWord",
						  	user : j,
							v1 : innerArray
						});
					}
					
				};

			break;


			case "megaWords":

				var sarr;
				//check the time and user config
				if(window.configSlides[i].timeType == "past"){
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else if(window.configSlides[i].timeType == "participle"){

					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else {
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}



				
				sarr = shuffle(sarr);


				var trueFalse = shuffle(createValueArray(0, sarr.length/2).concat(createValueArray(1, sarr.length/2)));
				//console.log(tFA);

				//Shuffle
				for (var m = 0; m < sarr.length; m++) {
					sarr[m].words = shuffle(sarr[m].words);
				};

				for (var m = 0; m < sarr.length; m++) {

					var mr = sarr[m];
					var mw = mr.words;
					for (var k = 0; k < mw.length; k++) {
						window.mySlides.push({
							type : "drawWord",
						  	user : k,
							v1 : mw[k].word,
							sound : mw[k].sound,
						});
					};

					//True or false
					

					if(trueFalse[m]){
						window.mySlides.push({
							type : "drawWord",
						  	user : 4,
							v1 : mr.humanTrue.word,
							sound : mr.humanTrue.sound,
						});
					}
					else {
						window.mySlides.push({
							type : "drawWord",
						  	user : 4,
							v1 : mr.humanFalse.word,
							sound : mr.humanFalse.sound,
						});
					}
				}

			break;

			case "megaWords2":

				var sarr;
				//check the time and user config
				if(window.configSlides[i].timeType == "past"){
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else if(window.configSlides[i].timeType == "participle"){

					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else {
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}

				tempSlide = sarr;
				//var tempSlide = window.configSlides[i].baseGroup;
				var pattern = [
					[
						tempSlide.rt1,
						tempSlide.rt2,
						tempSlide.rf1,
						tempSlide.rf2,
					],
					[
						tempSlide.rt2,
						tempSlide.rt3,
						tempSlide.rf2,
						tempSlide.rf3,
					],
					[
						tempSlide.rt3,
						tempSlide.rt2,
						tempSlide.rf3,
						tempSlide.rf1,
					],
					[
						tempSlide.rt1,
						tempSlide.rt2,
						tempSlide.rf1,
						tempSlide.rf2,
					],
					[
						tempSlide.rt2,
						tempSlide.rt3,
						tempSlide.rf2,
						tempSlide.rf3,
					],
					[
						tempSlide.rt3,
						tempSlide.rt1,
						tempSlide.rf3,
						tempSlide.rf1,
					]
				];

				for (var m = 0; m < pattern.length; m++) {
					pattern[m] = shuffle(pattern[m]);
				};

				//add the last user word
				pattern[0].push(tempSlide.t1);
				pattern[1].push(tempSlide.t2);
				pattern[2].push(tempSlide.t3);
				pattern[3].push(tempSlide.f1);
				pattern[4].push(tempSlide.f2);
				pattern[5].push(tempSlide.t3);

				pattern = shuffle(pattern);
				//console.log(pattern);
				
				for (a in pattern) {
						var userC = 0;
						for(p in pattern[a]){
							window.mySlides.push({
								type : "drawWord",
							  	user : userC,
								v1 : pattern[a][p].word,
								//sound : pattern[a][p].sound,
							});
							userC++;
						}
					};

			break;

			case "trainingGen":

				window.mySlides.push({
					type : "trainingWord",
				  	user : 0,
					v1 : window.configSlides[i].word1,
					sound : window.configSlides[i].sound
				});

			break;

			case "trainingRel":

				var sarr;
				//check the time and user config
				if(window.configSlides[i].timeType == "past"){
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else if(window.configSlides[i].timeType == "participle"){

					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}else {
					if(window.configUser.past == 0){
						sarr = window.configSlides[i].baseGroup;
					}else if(window.configUser.past == 1){
						sarr = window.configSlides[i].version1Group;
					}else {
						sarr = window.configSlides[i].version2Group;
					}
				}
				

				window.mySlides.push({
					type : "trainingWord",
				  	user : 0,
					v1 : sarr.word1,
					sound : sarr.sound
				});

			break;


			case "finalRandMegaWords":

				var outOutArray = [];

				//window.configSlides[i].wordArray.remove(window.configSlides[i].wordArray.length);
				
				for (a in window.configSlides[i].wordArray){
					//_storeScheme.push(window.configSlides[i].wordArray[a].scheme);
					var shiftArray = [];
					for (var three = 0; three < window.configSlides[i].iter; three += 1){

						
						var inArr = arrayCopy(window.configSlides[i].wordArray[a].v1);
						//console.log(inArr);
						var store = inArr[inArr.length-1-three];
						inArr = removeArrayItem(inArr,inArr.length-1-three);
						//inArr.remove(inArr.length-1-three);
						inArr = shuffle(inArr);
						//console.log(inArr);
						inArr.push(store);
						shiftArray.push(inArr);
						//shiftArray.scheme = window.configSlides[i].wordArray[a].scheme;
					}
					outOutArray.push({scheme: window.configSlides[i].wordArray[a].scheme,
						arr : shiftArray});

				}

				var _outOutArray = shuffle(outOutArray);
				//console.log("outOutArray", _outOutArray, outOutArray);

				for (var three = 0; three < window.configSlides[i].iter; three += 1){
					for (a in _outOutArray){
						//console.log(_outOutArray[a].arr[three]);
						var innerAr = _outOutArray[a].arr[three];
						for (var b = 0; b < innerAr.length; b+=1) {
							var v1 = [innerAr[0],innerAr[1],innerAr[2],innerAr[3],innerAr[4]];
							window.mySlides.push({
								type : "drawManyWord",
							  	user : b,
								v1 : v1,
								robotW : v1[b],
								hardEasy : window.configSlides[i].hardEasy,
								scheme: _outOutArray[a].scheme,
							});

							//console.log(_outOutArray[a].scheme);
						}
					}

				}

				/*
				for (var three = 0; three < window.configSlides[i].iter; three += 1){





					var myArray = window.configSlides[i].wordArray;
					myArray = shuffle(myArray);
					for (a in myArray) {
						//console.log(myArray[a]);
						
						var innerAr = myArray[a].v1;
						innerAr = shuffle(innerAr);
						for (var b = 0; b < innerAr.length; b+=1) {
							var v1 = [innerAr[0],innerAr[1],innerAr[2],innerAr[3],innerAr[4]];
							window.mySlides.push({
								type : "drawManyWord",
							  	user : b,
								v1 : v1,
								robotW : v1[b],
								hardEasy : window.configSlides[i].hardEasy,
								scheme: myArray[a].scheme,
							});

							//console.log(v1,b,v1[b]);
						}
						window.myCsv += ""+(window.mySlides.length-1)+", ed, ,\n";
					}
				}*/

			break;

			default:
				window.mySlides.push(window.configSlides[i]);
		}
	}

}




function shuffle(arrayb) {
	var array = arrayCopy(arrayb);

	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function createValueArray(value,length){
	var cool = new Array(length);
	for (var i = 0; i < length; i++) {
		cool[i] = value;
	};

	return cool;
}


function incSlideCount(){
	window.mySlidecount +=1;
}


// Array Remove - By John Resig (MIT Licensed)
removeArrayItem = function (array,key) {
    var _array = [];
    delete array[key];
    for (var item in array) {
        if (array[item])
            _array.push(array[item]);
    }
    return _array;
};


arrayCopy = function (array){
	var _array = [];

	for (var item in array) {
        _array.push(array[item]);
    }

	return _array;
}