/**
 * this will read the configSlides json file and generate the slides.
 */
function slideGenerator () {

	for(var i = 0; i < configSlides.length; i++){
		

		switch(window.configSlides[i].type){


			


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
				}


			break;

			case "drawAsch":
				for(var k = 0; k < 5; k++){
					window.mySlides.push({
						type : "drawAsch",
					  	user : k,
					  	v1 : 0.95,
					  	v2 : 0.1,
					  	v3 : 0.4,
					  	answer : 0.95
					});
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

			case "megaWords":
				var sarr = window.configSlides[i].wordGroup;
				sarr = shuffle(sarr);


				var trueFalse = shuffle(createValueArray(0, sarr.length/2).concat(createValueArray(1, sarr.length/2)));
				//console.log(tFA);

				//Shuffle
				for (var i = 0; i < sarr.length; i++) {
					sarr[i].words = shuffle(sarr[i].words);
				};

				for (var i = 0; i < sarr.length; i++) {

					var mr = sarr[i];
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
					

					if(trueFalse[i]){
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

			default:
				window.mySlides.push(window.configSlides[i]);
		}
	}

}

window.configSlides = [
	{
		type : "megaWords",
		wordGroup : [
			{
				words: [
					{
						sound : "cling.mp3",
						word : "a1"
					},
					{
						sound : "sink.mp3",
						word : "a2"
					},
					{
						sound : "stink.mp3",
						word : "a3"
					},
					{
						sound : "break.mp3",
						word : "a4"
					}
				],
				humanTrue: 
					{
						sound : "hurl.mp3",
						word : "a5"
					},
				humanFalse: 
					{
						sound : "hurl.mp3",
						word : "a6"
					},
			},
			{
				words: [
					{
						sound : "cling.mp3",
						word : "1"
					},
					{
						sound : "sink.mp3",
						word : "2"
					},
					{
						sound : "stink.mp3",
						word : "3"
					},
					{
						sound : "break.mp3",
						word : "4"
					}
				],
				humanTrue: 
					{
						sound : "hurl.mp3",
						word : "5"
					},
				humanFalse: 
					{
						sound : "hurl.mp3",
						word : "6"
					},
			},
			{
				words: [
					{
						sound : "cling.mp3",
						word : "1"
					},
					{
						sound : "sink.mp3",
						word : "2"
					},
					{
						sound : "stink.mp3",
						word : "3"
					},
					{
						sound : "break.mp3",
						word : "4"
					}
				],
				humanTrue: 
					{
						sound : "hurl.mp3",
						word : "5"
					},
				humanFalse: 
					{
						sound : "hurl.mp3",
						word : "6"
					},
			},
			{
				words: [
					{
						sound : "cling.mp3",
						word : "1"
					},
					{
						sound : "sink.mp3",
						word : "2"
					},
					{
						sound : "stink.mp3",
						word : "3"
					},
					{
						sound : "break.mp3",
						word : "4"
					}
				],
				humanTrue: 
					{
						sound : "hurl.mp3",
						word : "5"
					},
				humanFalse: 
					{
						sound : "hurl.mp3",
						word : "6"
					},
			}
		]
	},
	{
	  	type : "drawCommand",
	  	v1 : "HELLO You. How is it going?",
	  	v2 : "On the next slide I'll show you some instruction. Please read them and click SPACE to go to the next page. ",  	
		sound : "s1.mp3",
	},
	{
	  	type : "drawCommand",
	  	v1 : "Lines instruction with 5 test rounds.",
	  	v2 : "You will see 3 lines on the left side labeled with A,B,C. Your task is it to tell what label the line on the right side has. Please anwer only when your color is shown. We run now 3 test rounds.",  	
		
	},/*
	{
	  	type : "drawAsch",
	  	user : 0,
	  	v1 : 0.95,
	  	v2 : 0.1,
	  	v3 : 0.4,
	  	answer : 0.95
	},
	{
		type : "drawAsch",
		user : 4,
	  	v1 : 0.1,
	  	v2 : 0.3,
	  	v3 : 0.8,
	  	answer : 0.3
	},*/

	{
		type : "deltaAsch",
		delta : 0.9
	},
	{
		type : "deltaAsch",
		delta : 0.1
	},
	{
		type : "deltaAsch",
		delta : 0.5
	},
	{
	  	type : "drawCommand",
	  	v1 : "LINE TEST",
	  	v2 : "Now we will have 30 test rounds with the same settings.",  	
		
	},
	{
		type : "deltaAsch",
		delta : 0.9
	},
	{
		type : "deltaAsch",
		delta : 0.1
	},
	{
		type : "deltaAsch",
		delta : 0.5
	},
	{
	  	type : "drawCommand",
	  	v1 : "FIRST LINE TEST is now OVER",
	  	v2 : "Thank you. Instructions for the next round follow.",  	
		
	},
	{
	  	type : "drawCommand",
	  	v1 : "Past tense instruction with 5 test rounds",
	  	v2 : "You will see now exact one word on the screen and you must create the past tense form. Everyone gets an other word.  Please anwer only when your color is shown. We run now 3 test rounds.",  	
		
	},

	/*
	{
		type : "randAsch",
		count : 5
	},*/
	{
		type : "randWords",
		words: [
			{
				sound : "cling.mp3",
				word : "cling"
			},
			{
				sound : "sink.mp3",
				word : "sink"
			},
			{
				sound : "stink.mp3",
				word : "stink"
			},
			{
				sound : "break.mp3",
				word : "break"
			}
		],
		human: 
			{
				sound : "hurl.mp3",
				word : "hurl"
			},

	},
	{
		type : "randWords",
		words: [
			{
				sound : "tell.mp3",
				word : "tell"
			},
			{
				sound : "drink.mp3",
				word : "drink"
			},
			{
				sound : "ring.mp3",
				word : "ring"
			},
			{
				sound : "keep.mp3",
				word : "keep"
			}
		],
		human: 
			{
				sound : "burn.mp3",
				word : "burn"
			},

	},
	{
	  	type : "drawCommand",
	  	v1 : "Past tense TEST is now OVER",
	  	v2 : "Thank you. Instructions for the next round follow.",  	
		
	},
	{
	  	type : "drawCommand",
	  	v1 : "Past participle instruction with 5 test rounds",
	  	v2 : "You will see now exact one word on the screen and you must create the past participle form. Everyone gets an other word.  Please anwer only when your color is shown. We run now 3 test rounds.",  	
		
	},
	{
		type : "randWords",
		words: [
			{
				sound : "know.mp3",
				word : "know"
			},
			{
				sound : "show.mp3",
				word : "show"
			},
			{
				sound : "grow.mp3",
				word : "grow"
			},
			{
				sound : "give.mp3",
				word : "give"
			}
		],
		human: 
			{
				sound : "cheat.mp3",
				word : "cheat"
			},

	},
	{
		type : "randWords",
		words: [
			{
				sound : "strike.mp3",
				word : "strike"
			},
			{
				sound : "mow.mp3",
				word : "mow"
			},
			{
				sound : "fly.mp3",
				word : "fly"
			},
			{
				sound : "speak.mp3",
				word : "speak"
			}
		],
		human: 
			{
				sound : "tell.mp3",
				word : "tell"
			},

	},
	{
	  	type : "drawCommand",
	  	v1 : "Past participle TEST is now OVER",
	  	v2 : "Thank you. Instructions for the next round follow.",  	
		
	},
	{
	  	type : "drawCommand",
	  	v1 : "Noun test instruction with 5 test rounds",
	  	v2 : "You will see now exact one word on the screen and you must create the plural form. Everyone gets an other word. Please anwer only when your color is shown. We run now 3 test rounds.",  	
		
	},
	{
		type : "randWords",
		words: [
			{
				sound : "hoof.mp3",
				word : "hoof"
			},
			{
				sound : "thief.mp3",
				word : "thief"
			},
			{
				sound : "wolf.mp3",
				word : "wolf"
			},
			{
				sound : "goose.mp3",
				word : "goose"
			}
		],
		human: 
			{
				sound : "ox.mp3",
				word : "ox"
			},

	},{
		type : "randWords",
		words: [
			{
				sound : "half.mp3",
				word : "half"
			},
			{
				sound : "scarf.mp3",
				word : "scarf"
			},
			{
				sound : "mouse.mp3",
				word : "mouse"
			},
			{
				sound : "groove.mp3",
				word : "groove"
			}
		],
		human: 
			{
				sound : "chief.mp3",
				word : "chief"
			},

	},
	{
	  	type : "drawCommand",
	  	v1 : "Thank you for everything.",
	  	v2 : "That was amazing.",  	
		
	},
	/*
	{
		type : "drawWord",
		user : 5,
		v1 : "know",
		sound : "know1.mp3",
	},
	{
		type : "drawWord",
		user : 1,
		v1 : "show",
		sound : "show1.mp3",
	},
	{
		type : "drawWord",
		user : 2,
		v1 : "grow",
		sound : "grow1.mp3",
	},
	{
		type : "drawWord",
		user : 3,
		v1 : "give",
		sound : "give1.mp3",
	},
	{
		type : "drawWord",
		user : 4,
		v1 : "cheat",
		sound : "cheat1.mp3",
	},
	{
		type : "drawWord",
		user : 5,
		v1 : "cheat",
		sound : "cheat1.mp3",
	}*/
];

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