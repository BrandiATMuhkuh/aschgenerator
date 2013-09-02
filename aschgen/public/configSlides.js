window.configUser = {
	past : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	participle : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	plural : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	multi : true, //show target colors/Yes no
};


window.configSlides = 
[

	{
		"type": "drawAsch",
		"v1": 1,
		"v2": 0.95,
		"v3": 1,
		"answer": 1,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst5_visual_pr_0.wav"
	},
	
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
		delta : 0.01
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
		type : "randAschList",
		list: [
			{
	  			v1 : 0.1,
	  			v2 : 0.5,
	  			v3 : 1,
	  			answer : 1
	  		},
	  		{
	  			v1 : 0.8,
	  			v2 : 0.1,
	  			v3 : 0.5,
	  			answer : 0.1
	  		}
	  	]
	  	
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


	{
		type : "trainingGen",
		sound : "past_ex_cond1_2.mp3",
		word1 : "go",
	},

	{
		type : "trainingRel",
		timeType : "past", // can be past, participle, plural
		baseGroup : {
			sound : "past_bas.mp3",
			word1 : "keep",
			word2 : "kept"
		},
		
		version1Group : {
			sound : "past_ex_cond1_2.mp3",
			word1 : "drink",
			word2 : "drank"
		},

		version2Group : {
			sound : "past_cond2.mp3",
			word1 : "drink",
			word2 : "drank"
		}		
	},


	{
	  	type : "drawCommand",
	  	v1 : "Past Test",
	  	v2 : "Announces the test round for the verbs",  	
		sound : "past_test.mp3",
	},

	{
			type : "simpleWords",
			list : [
				{
					actors: ["sing", "ring", "bring", "cling"],
					participant: "wring"
				},
				{
					actors: ["_sing", "_ring", "_bring", "_cling"],
					participant: "_wring"
				}
			]

	},




	{
	  	type : "drawCommand",
	  	v1 : "THANK YOU!!!",
	  	v2 : "T H X",  	
		sound : "exp_thanks.mp3",
	}



];