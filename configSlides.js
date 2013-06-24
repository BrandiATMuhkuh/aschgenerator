window.configUser = {
	past : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	participle : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	plural : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	multi : true, //show target colors/Yes no
};


window.configSlides = 
[

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
		
	},

	{
		type : "deltaAsch",
		delta : 0.9
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

	{
		type : "training",
		
		word1: {
			sound : "stink.mp3",
			word : "go"
		},
		answer1: {
			sound : "cling.mp3",
			word : "went"
		}
		
	},

	{
		type : "training",
		
		word1: {
				sound : "cling.mp3",
				word : "drink"
			},
		answer1: {
				sound : "stink.mp3",
				word : "drank"
			}
		
	},

	{
	  	type : "drawCommand",
	  	v1 : "Past Test",
	  	v2 : "Now we will have 30 test rounds with the same settings.",  	
		
	},

	{
			type : "megaWords2",
			timeType : "past", // can be past, participle, plural
			baseGroup : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			},

			version1Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			},

			version2Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			}
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
		type : "training",
		
		word1: {
			sound : "stink.mp3",
			word : "see"
		},
		answer1: {
			sound : "cling.mp3",
			word : "saw"
		}
		
	},

	{
		type : "training",
		
		word1: {
				sound : "cling.mp3",
				word : "know"
			},
		answer1: {
				sound : "stink.mp3",
				word : "knew"
			}
		
	},

	{
	  	type : "drawCommand",
	  	v1 : "participle Test",
	  	v2 : "Now we will have 30 test rounds with the same settings.",  	
		
	},


	{
			type : "megaWords2",
			timeType : "participle", // can be past, participle, plural
			baseGroup : {
				rt1:{
						sound : "cling.mp3",
						word : "show"
					},
				rt2:{
						sound : "cling.mp3",
						word : "grow"
					},
				rt3:{
						sound : "cling.mp3",
						word : "throw"
					},
				t1: {
						sound : "cling.mp3",
						word : "blow"
					},
				t2: {
						sound : "cling.mp3",
						word : "fly"
					},
				t3: {
						sound : "cling.mp3",
						word : "sow"
					},
				rf1:{
						sound : "cling.mp3",
						word : "break"
					},
				rf2:{
						sound : "cling.mp3",
						word : "hurl"
					},
				rf3:{
						sound : "cling.mp3",
						word : "tell"
					},
				f1:	{
						sound : "cling.mp3",
						word : "keep"
					},
				f2:	{
						sound : "cling.mp3",
						word : "eat"
					},
				f3: {
						sound : "cling.mp3",
						word : "burn"
					}
			},

			version1Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			},

			version2Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			}
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
		type : "training",
		
		word1: {
			sound : "stink.mp3",
			word : "apple"
		},
		answer1: {
			sound : "cling.mp3",
			word : "apples"
		}
		
	},

	{
		type : "training",
		
		word1: {
				sound : "cling.mp3",
				word : "roof"
			},
		answer1: {
				sound : "stink.mp3",
				word : "roofs"
			}
		
	},

	{
	  	type : "drawCommand",
	  	v1 : "plural Test",
	  	v2 : "Now we will have 30 test rounds with the same settings.",  	
		
	},

	{
			type : "megaWords2",
			timeType : "plural", // can be past, participle, plural
			baseGroup : {
				rt1:{
						sound : "cling.mp3",
						word : "shelf"
					},
				rt2:{
						sound : "cling.mp3",
						word : "calf"
					},
				rt3:{
						sound : "cling.mp3",
						word : "half"
					},
				t1: {
						sound : "cling.mp3",
						word : "scarf"
					},
				t2: {
						sound : "cling.mp3",
						word : "wolf"
					},
				t3: {
						sound : "cling.mp3",
						word : "self"
					},
				rf1:{
						sound : "cling.mp3",
						word : "goose"
					},
				rf2:{
						sound : "cling.mp3",
						word : "house"
					},
				rf3:{
						sound : "cling.mp3",
						word : "ox"
					},
				f1:	{
						sound : "cling.mp3",
						word : "mouse"
					},
				f2:	{
						sound : "cling.mp3",
						word : "groove"
					},
				f3: {
						sound : "cling.mp3",
						word : "chief"
					}
			},

			version1Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			},

			version2Group : {
				rt1:{
						sound : "cling.mp3",
						word : "ring"
					},
				rt2:{
						sound : "cling.mp3",
						word : "sing"
					},
				rt3:{
						sound : "cling.mp3",
						word : "sink"
					},
				t1: {
						sound : "cling.mp3",
						word : "shrink"
					},
				t2: {
						sound : "cling.mp3",
						word : "spring"
					},
				t3: {
						sound : "cling.mp3",
						word : "stink"
					},
				rf1:{
						sound : "cling.mp3",
						word : "give"
					},
				rf2:{
						sound : "cling.mp3",
						word : "cheat"
					},
				rf3:{
						sound : "cling.mp3",
						word : "strike"
					},
				f1:	{
						sound : "cling.mp3",
						word : "speak"
					},
				f2:	{
						sound : "cling.mp3",
						word : "hide"
					},
				f3: {
						sound : "cling.mp3",
						word : "tell"
					}
			}
	},

	{
	  	type : "drawCommand",
	  	v1 : "Thank you for everything.",
	  	v2 : "That was amazing.",  	
		
	},


];