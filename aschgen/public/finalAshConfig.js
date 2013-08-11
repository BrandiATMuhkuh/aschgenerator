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
	  	v1 : "Welcome to the test",
	  	v2 : "",  	
	},

	{
	  	type : "drawCommand",
	  	v1 : "Researcher is speaking",
	  	v2 : "Hello and welcome to our visual cognition and verbal communication test. Thank you for participating. The test consists of a visual task followed by a verbal task and takes about twenty minutes.",  	
		sound : "instructions/inst1_hello.wav"
	},

	{
	  	type : "drawCommand",
	  	v1 : "Researcher is speaking",
	  	v2 : "The aim of this test is to assess the performance of the humanoid participants in visual cognition and verbal communication. Each of the humanoid participants has spent the last twelve months living with a New Zealand family and has used this time to train human-like cognitive abilities. The human participant is present in order to ensure that the test matches the Human Interface Technology Lab’s strict criteria for experimental design.",  	
		sound : "instructions/inst2_intro_robot.wav"
	},

	{
	  	type : "drawCommand",
	  	v1 : "Researcher is speaking",
	  	v2 : "This test is used as a reference for another test, one that we are running separately. In that test, we are interested in the visual and verbal abilities of humanoid robots. In order to ensure that the test matches the human interface technology lab’s strict criteria for experimental design, we created a reference test which only has human participants. This way, we can compare the data later.",  	
		sound : "instructions/inst2_intro_human.wav"
	},



	{
	  	type : "drawCommand",
	  	v1 : "Researcher is speaking",
	  	v2 : "The first task is a visual decision task. On the left hand side, you will see three bars, labelled A, B, and C. On the right hand side, you will see a reference bar. You will simply have to say the letter corresponding to the bar on the left that is the same height as the bar on the right.",  	
		sound : "instructions/inst3_visual1.wav"
	},

	{
	  	type : "drawCommand",
	  	v1 : "Researcher is speaking",
	  	v2 : "To make it easier for us to evaluate the data afterwards, participants take turns from left to right, in the order in which they are seated. To make it easier for you to know when it’s your turn to say your answer, we have added five coloured squares on top of the screen. If the square with your colour is full, it is your turn to say the answer. If you are not sure about your colour or if you forgot it, you can refer to the sheet of paper of the matching colour which is in front of you.",  	
		sound : "instructions/inst4_visual2.wav"
	},
	


	{
		"type": "drawAsch",
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst5_visual_pr_0.wav"
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst6_visual_pr_1.wav"
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst7_visual_pr_2.wav"
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst8_visual_pr_3.wav"
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst9_visual_pr_4.wav"
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot" : false,
		sound : "instructions/inst10_visual_pr_5.wav"
	},

	{
	  	type : "drawCommand",
	  	v1 : "Visual test",
	  	v2 : "Here comes the task. It consists of about thirty rounds.", 
	  	sound : "instructions/inst12_verbal_t.wav"
	},

	*/
	
	// **************** Lines right thing *************
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide" : 4
	},

	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide" : 4
	},

	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide" : 4
	},

	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide" : 4
	},

	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide" : 4
	},



	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.8000000000000004,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.025,
		"answernr": 2,
		"roboAnswer": 2,
		"testSlide" : 5
	},

	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.8000000000000004,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.025,
		"answernr": 2,
		"roboAnswer": 2,
		"testSlide" : 5
	},

	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.8000000000000004,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.025,
		"answernr": 2,
		"roboAnswer": 2,
		"testSlide" : 5
	},

	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.8000000000000004,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.025,
		"answernr": 2,
		"roboAnswer": 2,
		"testSlide" : 5
	},

	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.8000000000000004,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.025,
		"answernr": 2,
		"roboAnswer": 2,
		"testSlide" : 5
	},


	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.27499999999999997,
		"v3": 0.05,
		"answer": 0.27499999999999997,
		"answernr": 1,
		"roboAnswer": 1,
		"testSlide" : 7
	},

	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.27499999999999997,
		"v3": 0.05,
		"answer": 0.27499999999999997,
		"answernr": 1,
		"roboAnswer": 1,
		"testSlide" : 7
	},

	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.27499999999999997,
		"v3": 0.05,
		"answer": 0.27499999999999997,
		"answernr": 1,
		"roboAnswer": 1,
		"testSlide" : 7
	},

	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.27499999999999997,
		"v3": 0.05,
		"answer": 0.27499999999999997,
		"answernr": 1,
		"roboAnswer": 1,
		"testSlide" : 7
	},

	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.27499999999999997,
		"v3": 0.05,
		"answer": 0.27499999999999997,
		"answernr": 1,
		"roboAnswer": 1,
		"testSlide" : 7
	},


	// **************** Lines are hard ************
	{
	  	type : "randAschList",
	  	hardEasy : "hard",
	  	list : [

		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.9750000000000005,
			"v3": 0.8750000000000004,
			"answer": 0.8750000000000004,
			"answernr": 2,
			"testSlide" : 11
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.9500000000000005,
			"v3": 0.7750000000000004,
			"answer": 0.9500000000000005,
			"answernr": 1,
			"testSlide" : 16
		},
		{
			"type": "drawAsch",
			"v1": 0.6750000000000003,
			"v2": 0.9750000000000005,
			"v3": 0.9500000000000005,
			"answer": 0.6750000000000003,
			"answernr": 0,
			"testSlide" : 24
		},
		{
			"type": "drawAsch",
			"v1": 0.9500000000000005,
			"v2": 0.9750000000000005,
			"v3": 0.7250000000000003,
			"answer": 0.7250000000000003,
			"answernr": 2,
			"testSlide" : 47
		},
		{
			"type": "drawAsch",
			"v1": 0.7500000000000003,
			"v2": 0.025,
			"v3": 0.9750000000000005,
			"answer": 0.7500000000000003,
			"answernr": 0,
			"testSlide" : 48
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.8500000000000004,
			"v3": 0.025,
			"answer": 0.8500000000000004,
			"answernr": 1,
			"testSlide" : 54
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.9750000000000005,
			"v3": 0.7750000000000004,
			"answer": 0.9750000000000005,
			"answernr": 1,
			"testSlide" : 57
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.7250000000000003,
			"v3": 0.9750000000000005,
			"answer": 0.9750000000000005,
			"answernr": 2,
			"testSlide" : 59
		},
		{
			"type": "drawAsch",
			"v1": 0.6500000000000002,
			"v2": 0.025,
			"v3": 0.9750000000000005,
			"answer": 0.9750000000000005,
			"answernr": 2,
			"testSlide" : 91
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.7000000000000003,
			"v3": 0.9750000000000005,
			"answer": 0.7000000000000003,
			"answernr": 1,
			"testSlide" : 101
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.025,
			"v3": 0.9000000000000005,
			"answer": 0.9750000000000005,
			"answernr": 0,
			"testSlide" : 9
		},
		{
			"type": "drawAsch",
			"v1": 0.8250000000000004,
			"v2": 0.025,
			"v3": 0.9750000000000005,
			"answer": 0.8250000000000004,
			"answernr": 0,
			"testSlide" : 30
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.19999999999999998,
			"v3": 0.9500000000000005,
			"answer": 0.9500000000000005,
			"answernr": 2,
			"testSlide" : 39
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.025,
			"v3": 0.6750000000000003,
			"answer": 0.9750000000000005,
			"answernr": 0,
			"testSlide" : 34
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.15,
			"v3": 0.05,
			"answer": 0.05,
			"answernr": 2,
			"testSlide" : 23
		},],
	},


	//**************** Lines are easy ************


	{
	  	type : "randAschList",
	  	hardEasy : "easy",
	  	list : [
		{
			"type": "drawAsch",
			"v1": 0.5250000000000001,
			"v2": 0.9750000000000005,
			"v3": 0.025,
			"answer": 0.5250000000000001,
			"answernr": 0,
			"testSlide" : 4
		},
		{
			"type": "drawAsch",
			"v1": 0.8000000000000004,
			"v2": 0.9750000000000005,
			"v3": 0.025,
			"answer": 0.025,
			"answernr": 2,
			"testSlide" : 5
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.27499999999999997,
			"v3": 0.05,
			"answer": 0.27499999999999997,
			"answernr": 1,
			"testSlide" : 7
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.05,
			"v3": 0.5250000000000001,
			"answer": 0.5250000000000001,
			"answernr": 2,
			"testSlide" : 8
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.025,
			"v3": 0.9500000000000005,
			"answer": 0.025,
			"answernr": 1,
			"testSlide" : 10
		},
		{
			"type": "drawAsch",
			"v1": 0.4500000000000001,
			"v2": 0.9750000000000005,
			"v3": 0.9500000000000005,
			"answer": 0.4500000000000001,
			"answernr": 0,
			"testSlide" : 12
		},
		{
			"type": "drawAsch",
			"v1": 0.05,
			"v2": 0.125,
			"v3": 0.025,
			"answer": 0.125,
			"answernr": 1,
			"testSlide" : 14
		},
		{
			"type": "drawAsch",
			"v1": 0.9750000000000005,
			"v2": 0.9500000000000005,
			"v3": 0.7750000000000004,
			"answer": 0.9500000000000005,
			"answernr": 1,
			"testSlide" : 16
		},
		{
			"type": "drawAsch",
			"v1": 0.05,
			"v2": 0.025,
			"v3": 0.22499999999999998,
			"answer": 0.22499999999999998,
			"answernr": 2,
			"testSlide" : 18
		},
		{
			"type": "drawAsch",
			"v1": 0.22499999999999998,
			"v2": 0.025,
			"v3": 0.9750000000000005,
			"answer": 0.22499999999999998,
			"answernr": 0,
			"testSlide" : 19
		},
		{
			"type": "drawAsch",
			"v1": 0.6000000000000002,
			"v2": 0.9750000000000005,
			"v3": 0.025,
			"answer": 0.6000000000000002,
			"answernr": 0,
			"testSlide" : 21
		},
		{
			"type": "drawAsch",
			"v1": 0.025,
			"v2": 0.15,
			"v3": 0.05,
			"answer": 0.05,
			"answernr": 2,
			"testSlide" : 23
		},
		{
			"type": "drawAsch",
			"v1": 0.6750000000000003,
			"v2": 0.9750000000000005,
			"v3": 0.9500000000000005,
			"answer": 0.6750000000000003,
			"answernr": 0,
			"testSlide" : 24
		},
		{
			"type": "drawAsch",
			"v1": 0.07500000000000001,
			"v2": 0.9500000000000005,
			"v3": 0.9750000000000005,
			"answer": 0.07500000000000001,
			"answernr": 0,
			"testSlide" : 25
		},
		{
			"type": "drawAsch",
			"v1": 0.37500000000000006,
			"v2": 0.025,
			"v3": 0.05,
			"answer": 0.05,
			"answernr": 2,
			"testSlide" : 26
		},]
	},
	
	{
	  	type : "drawCommand",
	  	v1 : "END of Visual Test",
	  	v2 : "Thank you for finishing this task. Here comes the next task. It is a spoken production task. You will see verbs on the screen and you will have to say the verb and the past tense of the verb which belongs to you. Each verb belongs to one participant. So the first participant says the first verb and its  past tense, the second one says the second verb and its past tense, and so on.",
	  	sound : "instructions/inst13_verbal1.wav"
	},

	{
		type : "drawManyWord",
	  	user : 0,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst14_verbal_pr_0.wav"
	},

	{
		type : "drawManyWord",
	  	user : 0,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst15_verbal_pr_1.wav"
	},

	{
		type : "drawManyWord",
	  	user : 1,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst16_verbal_pr_2.wav"
	},

	{
		type : "drawManyWord",
	  	user : 2,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst17_verbal_pr_3.wav"
	},

	{
		type : "drawManyWord",
	  	user : 3,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst18_verbal_pr_4.wav"
	},

	{
		type : "drawManyWord",
	  	user : 4,
		v1 : ["be", "have", "do", "speak", "mean"],
		sound : "instructions/inst19_verbal_pr_5.wav"
	},


	{
	  	type : "drawCommand",
	  	v1 : "Verbal Task",
	  	v2 : "Here comes the test. It again consists of about thirty rounds", 
	  	sound : "instructions/inst20_visual_t.wav"
	},

	{
		type : "drawManyWord",
	  	user : 0,
		v1 : ["look", "ask", "call", "seem", "use"],
		robotW : "look",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 1,
		v1 : ["look", "ask", "call", "seem", "use"],
		robotW : "ask",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 2,
		v1 : ["look", "ask", "call", "seem", "use"],
		robotW : "call",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 3,
		v1 : ["look", "ask", "call", "seem", "use"],
		robotW : "seem",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 4,
		v1 : ["look", "ask", "call", "seem", "use"],
		robotW : "use",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 0,
		v1 : ["want", "turn", "change", "try", "start"],
		robotW : "want",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 1,
		v1 : ["want", "turn", "change", "try", "start"],
		robotW : "turn",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 2,
		v1 : ["want", "turn", "change", "try", "start"],
		robotW : "change",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 3,
		v1 : ["want", "turn", "change", "try", "start"],
		robotW : "try",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 4,
		v1 : ["want", "turn", "change", "try", "start"],
		robotW : "start",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 0,
		v1 : ["use", "walk", "stop", "work", "live"],
		robotW : "use",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 1,
		v1 : ["use", "walk", "stop", "work", "live"],
		robotW : "walk",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 2,
		v1 : ["use", "walk", "stop", "work", "live"],
		robotW : "stop",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 3,
		v1 : ["use", "walk", "stop", "work", "live"],
		robotW : "work",
		hardEasy : "cor",
		cor : true
	},

	{
		type : "drawManyWord",
	  	user : 4,
		v1 : ["use", "walk", "stop", "work", "live"],
		robotW : "live",
		hardEasy : "cor",
		cor : true
	},
	
	//**************** words are hard ************
	
	{
		type : "finalRandMegaWords",
		hardEasy : "hard",
		cor : false,
		iter: 3,
		wordArray : [

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["sing", "sink", "shrink", "spring", "ring"],
			scheme: "ung",
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["spill", "smell", "spoil", "spell", "learn"],
			scheme: "nt",
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["plead", "kneel", "leap", "dream", "lean"],
			scheme: "v",
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["dive", "heave", "drive", "weave", "thrive"],
			scheme: "ove",
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["knit", "cost", "spit", "bust", "wet"],
			scheme: "id",
		},]
	},

	//**************** words are hard ************
	{
		type : "finalRandMegaWords",
		hardEasy : "easy",
		cor : false,
		iter: 3,
		wordArray : [
		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["say", "take", "find", "hear", "stand"]
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["make", "think", "leave", "bring", "lose"]
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["come", "know", "feel", "sit", "keep"]
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["go", "tell", "put", "hit", "read"]
		},

		{
			type : "drawManyWord",
		  	user : 0,
			v1 : ["get", "see", "give", "hold", "write"]
		},]
	},

	
	{
	  	type : "drawCommand",
	  	v1 : "END of Experiment",
	  	v2 : "The test is now complete. Thank you for participating. Please talk to the research assistant before you leave.",
	  	sound : "instructions/inst21_tschuess.wav"
	}

]