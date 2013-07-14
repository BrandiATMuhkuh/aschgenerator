/**
 * this will read the configSlides json file and generate the slides.
 */
function slideGenerator () {

	for(var i = 0; i < configSlides.length; i++){
		
		switch(window.configSlides[i].type){

			case "randAschList":
				var ashList = shuffle(window.configSlides[i].list);

				for (var k = 0; k < ashList.length; k++){
					


					for (var t = 0; t < 5; t++){
						window.mySlides.push({
							type : "drawAsch",
						  	user : t,
						  	v1 : ashList[k].v1,
						  	v2 : ashList[k].v2,
						  	v3 : ashList[k].v3,
						  	answer : ashList[k].answer
						});
					}
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

			case "drawAsch":
				for(var k = 0; k < 5; k++){
					window.mySlides.push({
						type : "drawAsch",
					  	user : k,
					  	v1 : 1,
					  	v2 : 0.95,
					  	v3 : 0.9,
					  	answer : 0.95
					});

					if(!configUser.solo)
						k=5;
				}

			break;

			case "visualAsch":

				var visualArray = new Array();
				var min = 0.1;
				var max = 1.05;
				/*
				for (var a = min; a < max; a=a+min) {
					for (var b = min; b < max; b=b+min) {
						for (var c = min; c < max; c=c+min) {

							visualArray.push({
								type : "drawAsch",
							  	user : k,
							  	v1 : a,
							  	v2 : b,
							  	v3 : c,
							  	answer : 1
							});
						}
					}
				}*/

				var a=0.15;
				var b=0.10;
				var n=0.05;

				for (var abc = 0; abc < 80; abc+=1) {

					console.log(a,b,n);
					if(a != (b+0.5) && a != n && b != n){
						visualArray.push({
							type : "drawAsch",
						  	user : k,
						  	v1 : a,
						  	v2 : b,
						  	v3 : n,
						  	answer : 1
						});
					}

					if(a>=0.95 && b>=0.9 && n<0.95){
						n+=0.05;
						console.log(a,b,n);
					}

					if(a>=0.95 && b<0.9){
						b+=0.05;
					}

					if(a<0.95){
						a+=0.05;
					}

					
				};

				console.log(a,b,n);


				
				var abc = 0;
				for (var d = 0; d < visualArray.length; d++) {
					
					if (abc===0) {
						visualArray[d].answer=visualArray[d].v1;
					}else if (abc===1) {
						visualArray[d].answer=visualArray[d].v2;
					}if (abc===2) {
						visualArray[d].answer=visualArray[d].v3;
					} 

					abc+=1;
					if (abc>2){
						abc = 0;
					}
				};


				
				console.log(visualArray.length);
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

			default:
				window.mySlides.push(window.configSlides[i]);
		}
	}

}


window.mySlides = [];

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = (Math.random() * counter--) | 0;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
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


