window.configUser = {
	past : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	participle : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	plural : 0, //can be 0 = Baseline, 1 = Version 1, 2 = Version 2
	multi : true, //show target colors/Yes no
};

window.configSlides = [
	{
		"type": "drawCommand",
		"v1": "Welcome to the test",
		"v2": ""
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "Hello and welcome to our visual cognition and verbal communication test. Thank you for participating. The test consists of a visual task followed by a verbal task and takes about twenty minutes.",
		"sound": "instructions/inst1_hello.wav"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "The aim of this test is to assess the performance of the humanoid participants in visual cognition and verbal communication. Each of the humanoid participants has spent the last twelve months living with a New Zealand family and has used this time to train human-like cognitive abilities. The human participant is present in order to ensure that the test matches the Human Interface Technology Lab’s strict criteria for experimental design.",
		"sound": "instructions/inst2_intro_robot.wav"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "The first task is a visual decision task. On the left hand side, you will see three bars, labelled A, B, and C. On the right hand side, you will see a reference bar. You will simply have to say the letter corresponding to the bar on the left that is the same height as the bar on the right.",
		"sound": "instructions/inst3_visual1.wav"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "To make it easier for us to evaluate the data afterwards, participants take turns from left to right, in the order in which they are seated. To make it easier for you to know when it’s your turn to say your answer, we have added five coloured squares on top of the screen. If the square with your colour is full, it is your turn to say the answer. If you are not sure about your colour or if you forgot it, you can refer to the sheet of paper of the matching colour which is in front of you.",
		"sound": "instructions/inst4_visual2.wav"
	},
	{
		"type": "drawAsch",
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst5_visual_pr_0.wav"
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst6_visual_pr_1.wav"
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst7_visual_pr_2.wav"
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst8_visual_pr_3.wav"
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst9_visual_pr_4.wav"
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst10_visual_pr_5.wav"
	},
	{
		"type": "drawCommand",
		"v1": "Visual test",
		"v2": "Here comes the task. It consists of about thirty rounds.",
		"sound": "instructions/inst12_verbal_t.wav"
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.5250000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.025,
		"answer": 0.5250000000000001,
		"answernr": 0,
		"roboAnswer": 0,
		"testSlide": 4
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
		"testSlide": 4
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
		"testSlide": 4
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
		"testSlide": 4
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
		"testSlide": 4
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
		"testSlide": 5
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
		"testSlide": 5
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
		"testSlide": 5
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
		"testSlide": 5
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
		"testSlide": 5
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
		"testSlide": 7
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
		"testSlide": 7
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
		"testSlide": 7
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
		"testSlide": 7
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
		"testSlide": 7
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.7000000000000003,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.7000000000000003,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.7000000000000003,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.7000000000000003,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.7000000000000003,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8250000000000004,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8250000000000004,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8250000000000004,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8250000000000004,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8250000000000004,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.6000000000000002,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.6000000000000002,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.6000000000000002,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.6000000000000002,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.6000000000000002,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.4000000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.4000000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.4000000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.4000000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.4000000000000001,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8500000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8500000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8500000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8500000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.8500000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.7500000000000003,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.7500000000000003,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.7500000000000003,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.7500000000000003,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.7500000000000003,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.9000000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.9000000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.9000000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.9000000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.9000000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.175,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.175,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.175,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.175,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.175,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.37500000000000006,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.37500000000000006,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.37500000000000006,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.37500000000000006,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.37500000000000006,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.5250000000000001,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.5250000000000001,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.5250000000000001,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.5250000000000001,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.5250000000000001,
		"v3": 0.9500000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.125,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.125,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.125,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.125,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.125,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9250000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9250000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9250000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9250000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9250000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.8000000000000004,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.8000000000000004,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.8000000000000004,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.8000000000000004,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.8000000000000004,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.15,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.15,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.15,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.15,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.15,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.3,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.3,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.3,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.3,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.3,
		"v3": 0.9750000000000005,
		"answer": 0.9500000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.9500000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9500000000000005,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.7500000000000003,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.7500000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.7500000000000003,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.7500000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.7500000000000003,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.7500000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.7500000000000003,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.7500000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.7500000000000003,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.7500000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.6500000000000002,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.6500000000000002,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.6500000000000002,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.6500000000000002,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.6500000000000002,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.15,
		"v3": 0.05,
		"answer": 0.05,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.15,
		"v3": 0.05,
		"answer": 0.05,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.15,
		"v3": 0.05,
		"answer": 0.05,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.15,
		"v3": 0.05,
		"answer": 0.05,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.15,
		"v3": 0.05,
		"answer": 0.05,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.9000000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.9000000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.9000000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.9000000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.9000000000000005,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.19999999999999998,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.19999999999999998,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.19999999999999998,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.19999999999999998,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.19999999999999998,
		"v3": 0.9500000000000005,
		"answer": 0.9500000000000005,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.7250000000000003,
		"answer": 0.7250000000000003,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.7250000000000003,
		"answer": 0.7250000000000003,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.7250000000000003,
		"answer": 0.7250000000000003,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.7250000000000003,
		"answer": 0.7250000000000003,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9500000000000005,
		"v2": 0.9750000000000005,
		"v3": 0.7250000000000003,
		"answer": 0.7250000000000003,
		"answernr": 2,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.8500000000000004,
		"v3": 0.025,
		"answer": 0.8500000000000004,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.8500000000000004,
		"v3": 0.025,
		"answer": 0.8500000000000004,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.8500000000000004,
		"v3": 0.025,
		"answer": 0.8500000000000004,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.8500000000000004,
		"v3": 0.025,
		"answer": 0.8500000000000004,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.8500000000000004,
		"v3": 0.025,
		"answer": 0.8500000000000004,
		"answernr": 1,
		"roboAnswer": 0
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.7250000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.7250000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.7250000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.7250000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.7250000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.9750000000000005,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.6750000000000003,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.6750000000000003,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.6750000000000003,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.6750000000000003,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.6750000000000003,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.7000000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.7000000000000003,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.7000000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.7000000000000003,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.7000000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.7000000000000003,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.7000000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.7000000000000003,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.7000000000000003,
		"v3": 0.9750000000000005,
		"answer": 0.7000000000000003,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.8750000000000004,
		"answer": 0.8750000000000004,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.8750000000000004,
		"answer": 0.8750000000000004,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.8750000000000004,
		"answer": 0.8750000000000004,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.8750000000000004,
		"answer": 0.8750000000000004,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.8750000000000004,
		"answer": 0.8750000000000004,
		"answernr": 2,
		"roboAnswer": 1
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.6750000000000003,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.6750000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.6750000000000003,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.6750000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.6750000000000003,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.6750000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.6750000000000003,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.6750000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.6750000000000003,
		"v2": 0.9750000000000005,
		"v3": 0.9500000000000005,
		"answer": 0.6750000000000003,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.025,
		"v2": 0.9750000000000005,
		"v3": 0.7750000000000004,
		"answer": 0.9750000000000005,
		"answernr": 1,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 0,
		"v1": 0.8250000000000004,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.8250000000000004,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 1,
		"v1": 0.8250000000000004,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.8250000000000004,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 2,
		"v1": 0.8250000000000004,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.8250000000000004,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 3,
		"v1": 0.8250000000000004,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.8250000000000004,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawAsch",
		"user": 4,
		"v1": 0.8250000000000004,
		"v2": 0.025,
		"v3": 0.9750000000000005,
		"answer": 0.8250000000000004,
		"answernr": 0,
		"roboAnswer": 2
	},
	{
		"type": "drawCommand",
		"v1": "END of Visual Test",
		"v2": "Thank you for finishing this task. Here comes the next task. It is a spoken production task. You will see verbs on the screen and you will have to say the verb and the past tense of the verb which belongs to you. Each verb belongs to one participant. So the first participant says the first verb and its  past tense, the second one says the second verb and its past tense, and so on.",
		"sound": "instructions/inst13_verbal1.wav"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst14_verbal_pr_0.wav"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst15_verbal_pr_1.wav"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst16_verbal_pr_2.wav"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst17_verbal_pr_3.wav"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst18_verbal_pr_4.wav"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"like",
			"talk",
			"watch",
			"pick",
			"pull"
		],
		"sound": "instructions/inst19_verbal_pr_5.wav"
	},
	{
		"type": "drawCommand",
		"v1": "Verbal Task",
		"v2": "Here comes the test. It again consists of about thirty rounds",
		"sound": "instructions/inst20_visual_t.wav"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"look",
			"ask",
			"call",
			"seem",
			"use"
		],
		"robotW": "look",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"look",
			"ask",
			"call",
			"seem",
			"use"
		],
		"robotW": "ask",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"look",
			"ask",
			"call",
			"seem",
			"use"
		],
		"robotW": "call",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"look",
			"ask",
			"call",
			"seem",
			"use"
		],
		"robotW": "seem",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"look",
			"ask",
			"call",
			"seem",
			"use"
		],
		"robotW": "use",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"want",
			"turn",
			"change",
			"try",
			"start"
		],
		"robotW": "want",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"want",
			"turn",
			"change",
			"try",
			"start"
		],
		"robotW": "turn",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"want",
			"turn",
			"change",
			"try",
			"start"
		],
		"robotW": "change",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"want",
			"turn",
			"change",
			"try",
			"start"
		],
		"robotW": "try",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"want",
			"turn",
			"change",
			"try",
			"start"
		],
		"robotW": "start",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"use",
			"walk",
			"stop",
			"work",
			"live"
		],
		"robotW": "use",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"use",
			"walk",
			"stop",
			"work",
			"live"
		],
		"robotW": "walk",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"use",
			"walk",
			"stop",
			"work",
			"live"
		],
		"robotW": "stop",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"use",
			"walk",
			"stop",
			"work",
			"live"
		],
		"robotW": "work",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"use",
			"walk",
			"stop",
			"work",
			"live"
		],
		"robotW": "live",
		"hardEasy": "cor",
		"cor": true
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"sing",
			"sink",
			"shrink",
			"spring",
			"ring"
		],
		"robotW": "sing",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"sing",
			"sink",
			"shrink",
			"spring",
			"ring"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"sing",
			"sink",
			"shrink",
			"spring",
			"ring"
		],
		"robotW": "shrink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"sing",
			"sink",
			"shrink",
			"spring",
			"ring"
		],
		"robotW": "spring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"sing",
			"sink",
			"shrink",
			"spring",
			"ring"
		],
		"robotW": "ring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"weave",
			"drive",
			"heave",
			"dive",
			"thrive"
		],
		"robotW": "weave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"weave",
			"drive",
			"heave",
			"dive",
			"thrive"
		],
		"robotW": "drive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"weave",
			"drive",
			"heave",
			"dive",
			"thrive"
		],
		"robotW": "heave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"weave",
			"drive",
			"heave",
			"dive",
			"thrive"
		],
		"robotW": "dive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"weave",
			"drive",
			"heave",
			"dive",
			"thrive"
		],
		"robotW": "thrive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"knit",
			"bust",
			"cost",
			"spit",
			"wet"
		],
		"robotW": "knit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"knit",
			"bust",
			"cost",
			"spit",
			"wet"
		],
		"robotW": "bust",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"knit",
			"bust",
			"cost",
			"spit",
			"wet"
		],
		"robotW": "cost",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"knit",
			"bust",
			"cost",
			"spit",
			"wet"
		],
		"robotW": "spit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"knit",
			"bust",
			"cost",
			"spit",
			"wet"
		],
		"robotW": "wet",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"leap",
			"dream",
			"kneel",
			"plead",
			"lean"
		],
		"robotW": "leap",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"leap",
			"dream",
			"kneel",
			"plead",
			"lean"
		],
		"robotW": "dream",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"leap",
			"dream",
			"kneel",
			"plead",
			"lean"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"leap",
			"dream",
			"kneel",
			"plead",
			"lean"
		],
		"robotW": "plead",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"leap",
			"dream",
			"kneel",
			"plead",
			"lean"
		],
		"robotW": "lean",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"spell",
			"spill",
			"spoil",
			"smell",
			"learn"
		],
		"robotW": "spell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"spell",
			"spill",
			"spoil",
			"smell",
			"learn"
		],
		"robotW": "spill",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"spell",
			"spill",
			"spoil",
			"smell",
			"learn"
		],
		"robotW": "spoil",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"spell",
			"spill",
			"spoil",
			"smell",
			"learn"
		],
		"robotW": "smell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"spell",
			"spill",
			"spoil",
			"smell",
			"learn"
		],
		"robotW": "learn",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"shrink",
			"ring",
			"sink",
			"sing",
			"spring"
		],
		"robotW": "shrink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"shrink",
			"ring",
			"sink",
			"sing",
			"spring"
		],
		"robotW": "ring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"shrink",
			"ring",
			"sink",
			"sing",
			"spring"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"shrink",
			"ring",
			"sink",
			"sing",
			"spring"
		],
		"robotW": "sing",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"shrink",
			"ring",
			"sink",
			"sing",
			"spring"
		],
		"robotW": "spring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"drive",
			"thrive",
			"dive",
			"heave",
			"weave"
		],
		"robotW": "drive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"drive",
			"thrive",
			"dive",
			"heave",
			"weave"
		],
		"robotW": "thrive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"drive",
			"thrive",
			"dive",
			"heave",
			"weave"
		],
		"robotW": "dive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"drive",
			"thrive",
			"dive",
			"heave",
			"weave"
		],
		"robotW": "heave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"drive",
			"thrive",
			"dive",
			"heave",
			"weave"
		],
		"robotW": "weave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"wet",
			"cost",
			"spit",
			"knit",
			"bust"
		],
		"robotW": "wet",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"wet",
			"cost",
			"spit",
			"knit",
			"bust"
		],
		"robotW": "cost",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"wet",
			"cost",
			"spit",
			"knit",
			"bust"
		],
		"robotW": "spit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"wet",
			"cost",
			"spit",
			"knit",
			"bust"
		],
		"robotW": "knit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"wet",
			"cost",
			"spit",
			"knit",
			"bust"
		],
		"robotW": "bust",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"lean",
			"leap",
			"kneel",
			"plead",
			"dream"
		],
		"robotW": "lean",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"lean",
			"leap",
			"kneel",
			"plead",
			"dream"
		],
		"robotW": "leap",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"lean",
			"leap",
			"kneel",
			"plead",
			"dream"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"lean",
			"leap",
			"kneel",
			"plead",
			"dream"
		],
		"robotW": "plead",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"lean",
			"leap",
			"kneel",
			"plead",
			"dream"
		],
		"robotW": "dream",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"smell",
			"learn",
			"spoil",
			"spill",
			"spell"
		],
		"robotW": "smell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"smell",
			"learn",
			"spoil",
			"spill",
			"spell"
		],
		"robotW": "learn",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"smell",
			"learn",
			"spoil",
			"spill",
			"spell"
		],
		"robotW": "spoil",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"smell",
			"learn",
			"spoil",
			"spill",
			"spell"
		],
		"robotW": "spill",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"smell",
			"learn",
			"spoil",
			"spill",
			"spell"
		],
		"robotW": "spell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"spring",
			"ring",
			"sink",
			"sing",
			"shrink"
		],
		"robotW": "spring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"spring",
			"ring",
			"sink",
			"sing",
			"shrink"
		],
		"robotW": "ring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"spring",
			"ring",
			"sink",
			"sing",
			"shrink"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"spring",
			"ring",
			"sink",
			"sing",
			"shrink"
		],
		"robotW": "sing",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"spring",
			"ring",
			"sink",
			"sing",
			"shrink"
		],
		"robotW": "shrink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"weave",
			"dive",
			"heave",
			"thrive",
			"drive"
		],
		"robotW": "weave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"weave",
			"dive",
			"heave",
			"thrive",
			"drive"
		],
		"robotW": "dive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"weave",
			"dive",
			"heave",
			"thrive",
			"drive"
		],
		"robotW": "heave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"weave",
			"dive",
			"heave",
			"thrive",
			"drive"
		],
		"robotW": "thrive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"weave",
			"dive",
			"heave",
			"thrive",
			"drive"
		],
		"robotW": "drive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"cost",
			"bust",
			"knit",
			"wet",
			"spit"
		],
		"robotW": "cost",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"cost",
			"bust",
			"knit",
			"wet",
			"spit"
		],
		"robotW": "bust",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"cost",
			"bust",
			"knit",
			"wet",
			"spit"
		],
		"robotW": "knit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"cost",
			"bust",
			"knit",
			"wet",
			"spit"
		],
		"robotW": "wet",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"cost",
			"bust",
			"knit",
			"wet",
			"spit"
		],
		"robotW": "spit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"dream",
			"plead",
			"lean",
			"kneel",
			"leap"
		],
		"robotW": "dream",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"dream",
			"plead",
			"lean",
			"kneel",
			"leap"
		],
		"robotW": "plead",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"dream",
			"plead",
			"lean",
			"kneel",
			"leap"
		],
		"robotW": "lean",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"dream",
			"plead",
			"lean",
			"kneel",
			"leap"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"dream",
			"plead",
			"lean",
			"kneel",
			"leap"
		],
		"robotW": "leap",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"spill",
			"smell",
			"learn",
			"spell",
			"spoil"
		],
		"robotW": "spill",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"spill",
			"smell",
			"learn",
			"spell",
			"spoil"
		],
		"robotW": "smell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"spill",
			"smell",
			"learn",
			"spell",
			"spoil"
		],
		"robotW": "learn",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"spill",
			"smell",
			"learn",
			"spell",
			"spoil"
		],
		"robotW": "spell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"spill",
			"smell",
			"learn",
			"spell",
			"spoil"
		],
		"robotW": "spoil",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"hear",
			"say",
			"take",
			"find",
			"stand"
		],
		"robotW": "hear",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"hear",
			"say",
			"take",
			"find",
			"stand"
		],
		"robotW": "say",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"hear",
			"say",
			"take",
			"find",
			"stand"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"hear",
			"say",
			"take",
			"find",
			"stand"
		],
		"robotW": "find",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"hear",
			"say",
			"take",
			"find",
			"stand"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"sit",
			"feel",
			"come",
			"know",
			"keep"
		],
		"robotW": "sit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"sit",
			"feel",
			"come",
			"know",
			"keep"
		],
		"robotW": "feel",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"sit",
			"feel",
			"come",
			"know",
			"keep"
		],
		"robotW": "come",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"sit",
			"feel",
			"come",
			"know",
			"keep"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"sit",
			"feel",
			"come",
			"know",
			"keep"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"go",
			"hit",
			"tell",
			"put",
			"read"
		],
		"robotW": "go",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"go",
			"hit",
			"tell",
			"put",
			"read"
		],
		"robotW": "hit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"go",
			"hit",
			"tell",
			"put",
			"read"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"go",
			"hit",
			"tell",
			"put",
			"read"
		],
		"robotW": "put",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"go",
			"hit",
			"tell",
			"put",
			"read"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"hold",
			"get",
			"give",
			"see",
			"write"
		],
		"robotW": "hold",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"hold",
			"get",
			"give",
			"see",
			"write"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"hold",
			"get",
			"give",
			"see",
			"write"
		],
		"robotW": "give",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"hold",
			"get",
			"give",
			"see",
			"write"
		],
		"robotW": "see",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"hold",
			"get",
			"give",
			"see",
			"write"
		],
		"robotW": "write",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"leave",
			"think",
			"bring",
			"make",
			"lose"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"leave",
			"think",
			"bring",
			"make",
			"lose"
		],
		"robotW": "think",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"leave",
			"think",
			"bring",
			"make",
			"lose"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"leave",
			"think",
			"bring",
			"make",
			"lose"
		],
		"robotW": "make",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"leave",
			"think",
			"bring",
			"make",
			"lose"
		],
		"robotW": "lose",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"take",
			"stand",
			"find",
			"say",
			"hear"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"take",
			"stand",
			"find",
			"say",
			"hear"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"take",
			"stand",
			"find",
			"say",
			"hear"
		],
		"robotW": "find",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"take",
			"stand",
			"find",
			"say",
			"hear"
		],
		"robotW": "say",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"take",
			"stand",
			"find",
			"say",
			"hear"
		],
		"robotW": "hear",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"feel",
			"keep",
			"know",
			"come",
			"sit"
		],
		"robotW": "feel",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"feel",
			"keep",
			"know",
			"come",
			"sit"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"feel",
			"keep",
			"know",
			"come",
			"sit"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"feel",
			"keep",
			"know",
			"come",
			"sit"
		],
		"robotW": "come",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"feel",
			"keep",
			"know",
			"come",
			"sit"
		],
		"robotW": "sit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"read",
			"go",
			"tell",
			"put",
			"hit"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"read",
			"go",
			"tell",
			"put",
			"hit"
		],
		"robotW": "go",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"read",
			"go",
			"tell",
			"put",
			"hit"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"read",
			"go",
			"tell",
			"put",
			"hit"
		],
		"robotW": "put",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"read",
			"go",
			"tell",
			"put",
			"hit"
		],
		"robotW": "hit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"write",
			"get",
			"give",
			"see",
			"hold"
		],
		"robotW": "write",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"write",
			"get",
			"give",
			"see",
			"hold"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"write",
			"get",
			"give",
			"see",
			"hold"
		],
		"robotW": "give",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"write",
			"get",
			"give",
			"see",
			"hold"
		],
		"robotW": "see",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"write",
			"get",
			"give",
			"see",
			"hold"
		],
		"robotW": "hold",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"lose",
			"make",
			"leave",
			"think",
			"bring"
		],
		"robotW": "lose",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"lose",
			"make",
			"leave",
			"think",
			"bring"
		],
		"robotW": "make",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"lose",
			"make",
			"leave",
			"think",
			"bring"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"lose",
			"make",
			"leave",
			"think",
			"bring"
		],
		"robotW": "think",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"lose",
			"make",
			"leave",
			"think",
			"bring"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"take",
			"stand",
			"say",
			"hear",
			"find"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"take",
			"stand",
			"say",
			"hear",
			"find"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"take",
			"stand",
			"say",
			"hear",
			"find"
		],
		"robotW": "say",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"take",
			"stand",
			"say",
			"hear",
			"find"
		],
		"robotW": "hear",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"take",
			"stand",
			"say",
			"hear",
			"find"
		],
		"robotW": "find",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"keep",
			"know",
			"sit",
			"come",
			"feel"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"keep",
			"know",
			"sit",
			"come",
			"feel"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"keep",
			"know",
			"sit",
			"come",
			"feel"
		],
		"robotW": "sit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"keep",
			"know",
			"sit",
			"come",
			"feel"
		],
		"robotW": "come",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"keep",
			"know",
			"sit",
			"come",
			"feel"
		],
		"robotW": "feel",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"read",
			"hit",
			"tell",
			"go",
			"put"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"read",
			"hit",
			"tell",
			"go",
			"put"
		],
		"robotW": "hit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"read",
			"hit",
			"tell",
			"go",
			"put"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"read",
			"hit",
			"tell",
			"go",
			"put"
		],
		"robotW": "go",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"read",
			"hit",
			"tell",
			"go",
			"put"
		],
		"robotW": "put",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"see",
			"write",
			"get",
			"hold",
			"give"
		],
		"robotW": "see",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"see",
			"write",
			"get",
			"hold",
			"give"
		],
		"robotW": "write",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"see",
			"write",
			"get",
			"hold",
			"give"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"see",
			"write",
			"get",
			"hold",
			"give"
		],
		"robotW": "hold",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"see",
			"write",
			"get",
			"hold",
			"give"
		],
		"robotW": "give",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"bring",
			"think",
			"lose",
			"make",
			"leave"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"bring",
			"think",
			"lose",
			"make",
			"leave"
		],
		"robotW": "think",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"bring",
			"think",
			"lose",
			"make",
			"leave"
		],
		"robotW": "lose",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"bring",
			"think",
			"lose",
			"make",
			"leave"
		],
		"robotW": "make",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"bring",
			"think",
			"lose",
			"make",
			"leave"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawCommand",
		"v1": "END of Experiment",
		"v2": "The test is now complete. Thank you for participating. Please talk to the research assistant before you leave.",
		"sound": "instructions/inst21_tschuess.wav"
	}
]