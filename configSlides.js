window.configUser = {
	past : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	participle : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	plural : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	multi : true, //show target colors/Yes no
};


window.configSlides = 
[
/*
	{
	  	type : "drawCommand",
	  	v1 : "This is doing to be a funny experiment!",
	  	v2 : "This slide welcomes you to the experiment in a placent new zealand accented female voice.",  	
		sound : "exp_welcome.mp3",
	},
	{
	  	type : "drawCommand",
	  	v1 : "Lines instruction.",
	  	v2 : "Instructions for the line part",  	
		sound : "lines_inst.mp3",
	},

	{
		type : "deltaAsch",
		delta : 0.9
	},
	{
		type : "deltaAsch",
		delta : 0.3
	},
	{
	  	type : "drawCommand",
	  	v1 : "LINE TEST",
	  	v2 : "Announces the test round for the lines",  
	  	sound : "lines_test.mp3",	
		
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
	  	v2 : "Thanks the participant after the lines",  
	  	sound : "lines_thanks.mp3",	
		
	},
	
	{
	  	type : "drawCommand",
	  	v1 : "Past tense instruction",
	  	v2 : "instructions for the verbs",  	
		sound : "past_inst.mp3",
	},
*/
	{
	  	type : "drawCommand",
	  	v1 : "Examples",
	  	v2 : "Some Examples",  	
		sound : "past_inst.mp3",
	},

	{
		type : "training",
		sound : "past_ex_cond1_2.mp3",
		word1 : "drink",
		word2 : "drank"		
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
		sound : "past_ex_cond1_2.mp3",
		word1 : "drink",
		word2 : "drank"		
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
		sound : "past_ex_cond1_2.mp3",
		word1 : "drink",
		word2 : "drank"		
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