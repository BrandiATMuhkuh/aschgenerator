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
		"v2": "Hello and welcome to our verbal communication and visual cognition test. Thank you for participating. The test consists of a verbal task followed by a visual task and takes about twenty minutes.",
		"sound": "instructions/inst_hello_lines_words.mp3",
		"wait": "15500"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "The aim of this test is to assess the performance of the five participants in visual cognition and verbal communication.",
		"sound": "instructions/inst_intro_human.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Instructions Verbal Task",
		"v2": "This task is a spoken production task. You will see verbs on the screen and you will have to say the verb and the past tense of the verb which belongs to you. Each verb belongs to one participant. So the first participant says the first verb and its  past tense, the second one says the second verb and its past tense, and so on.",
		"sound": "instructions/inst_verbal1.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Instructions Verbal Task",
		"v2": "Please remember to say the verb which is assigned to you, and the past tense of this verb. There are no good or bad answers here. Just say whatever form you would use in real life. And there is no reason to hurry.",
		"sound": "instructions/inst_verbal2.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "To make it easier for us to evaluate the data afterwards, participants take turns from left to right, in the order in which they are seated. To make it easier for you to know when it’s your turn to say your answer, we have added five coloured squares on the screen. If the square with your colour is full, it is your turn to say the answer. If you are not sure about your colour or if you forgot it, you can refer to the sheet of paper of the matching colour which is in front of you.",
		"sound": "instructions/inst_firstblock.mp3"
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
		"sound": "instructions/inst_all_practice.mp3"
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
		"sound": "instructions/inst_verbal_pr_1.mp3"
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
		"sound": "instructions/inst_verbal_pr_2.mp3"
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
		"sound": "instructions/inst_verbal_pr_3.mp3"
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
		"sound": "instructions/inst_verbal_pr_4.mp3"
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
		"sound": "instructions/inst_verbal_pr_5.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Verbal Task",
		"v2": "Here comes the task. It consists of about thirty rounds.",
		"sound": "instructions/inst_all_t.mp3"
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
			"drive",
			"dive",
			"weave",
			"heave",
			"thrive"
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
			"dive",
			"weave",
			"heave",
			"thrive"
		],
		"robotW": "dive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"drive",
			"dive",
			"weave",
			"heave",
			"thrive"
		],
		"robotW": "weave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"drive",
			"dive",
			"weave",
			"heave",
			"thrive"
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
			"dive",
			"weave",
			"heave",
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
			"cost",
			"bust",
			"spit",
			"knit",
			"wet"
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
			"spit",
			"knit",
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
			"cost",
			"bust",
			"spit",
			"knit",
			"wet"
		],
		"robotW": "spit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"cost",
			"bust",
			"spit",
			"knit",
			"wet"
		],
		"robotW": "knit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"cost",
			"bust",
			"spit",
			"knit",
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
			"smell",
			"spill",
			"spell",
			"spoil",
			"learn"
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
			"spill",
			"spell",
			"spoil",
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
			"smell",
			"spill",
			"spell",
			"spoil",
			"learn"
		],
		"robotW": "spell",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"smell",
			"spill",
			"spell",
			"spoil",
			"learn"
		],
		"robotW": "spoil",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"smell",
			"spill",
			"spell",
			"spoil",
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
			"spring",
			"sing",
			"sink",
			"ring"
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
			"spring",
			"sing",
			"sink",
			"ring"
		],
		"robotW": "spring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"shrink",
			"spring",
			"sing",
			"sink",
			"ring"
		],
		"robotW": "sing",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"shrink",
			"spring",
			"sing",
			"sink",
			"ring"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"shrink",
			"spring",
			"sing",
			"sink",
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
			"leap",
			"dream",
			"plead",
			"kneel",
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
			"plead",
			"kneel",
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
			"plead",
			"kneel",
			"lean"
		],
		"robotW": "plead",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"leap",
			"dream",
			"plead",
			"kneel",
			"lean"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"leap",
			"dream",
			"plead",
			"kneel",
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
			"drive",
			"thrive",
			"heave",
			"dive",
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
			"heave",
			"dive",
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
			"heave",
			"dive",
			"weave"
		],
		"robotW": "heave",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"drive",
			"thrive",
			"heave",
			"dive",
			"weave"
		],
		"robotW": "dive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"drive",
			"thrive",
			"heave",
			"dive",
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
			"knit",
			"spit",
			"wet",
			"cost",
			"bust"
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
			"spit",
			"wet",
			"cost",
			"bust"
		],
		"robotW": "spit",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"knit",
			"spit",
			"wet",
			"cost",
			"bust"
		],
		"robotW": "wet",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"knit",
			"spit",
			"wet",
			"cost",
			"bust"
		],
		"robotW": "cost",
		"hardEasy": "hard",
		"scheme": "id"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"knit",
			"spit",
			"wet",
			"cost",
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
			"spill",
			"smell",
			"learn",
			"spoil",
			"spell"
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
			"spoil",
			"spell"
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
			"spoil",
			"spell"
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
			"spoil",
			"spell"
		],
		"robotW": "spoil",
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
			"spoil",
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
			"sink",
			"ring",
			"shrink",
			"sing",
			"spring"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"sink",
			"ring",
			"shrink",
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
			"sink",
			"ring",
			"shrink",
			"sing",
			"spring"
		],
		"robotW": "shrink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"sink",
			"ring",
			"shrink",
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
			"sink",
			"ring",
			"shrink",
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
			"leap",
			"kneel",
			"lean",
			"plead",
			"dream"
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
			"kneel",
			"lean",
			"plead",
			"dream"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"leap",
			"kneel",
			"lean",
			"plead",
			"dream"
		],
		"robotW": "lean",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"leap",
			"kneel",
			"lean",
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
			"leap",
			"kneel",
			"lean",
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
			"weave",
			"thrive",
			"heave",
			"dive",
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
			"thrive",
			"heave",
			"dive",
			"drive"
		],
		"robotW": "thrive",
		"hardEasy": "hard",
		"scheme": "ove"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"weave",
			"thrive",
			"heave",
			"dive",
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
			"thrive",
			"heave",
			"dive",
			"drive"
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
			"thrive",
			"heave",
			"dive",
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
			"bust",
			"cost",
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
		"user": 1,
		"v1": [
			"bust",
			"cost",
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
		"user": 2,
		"v1": [
			"bust",
			"cost",
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
			"bust",
			"cost",
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
			"bust",
			"cost",
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
			"learn",
			"smell",
			"spill",
			"spell",
			"spoil"
		],
		"robotW": "learn",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"learn",
			"smell",
			"spill",
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
			"learn",
			"smell",
			"spill",
			"spell",
			"spoil"
		],
		"robotW": "spill",
		"hardEasy": "hard",
		"scheme": "nt"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"learn",
			"smell",
			"spill",
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
			"learn",
			"smell",
			"spill",
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
			"sink",
			"sing",
			"spring",
			"ring",
			"shrink"
		],
		"robotW": "sink",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"sink",
			"sing",
			"spring",
			"ring",
			"shrink"
		],
		"robotW": "sing",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"sink",
			"sing",
			"spring",
			"ring",
			"shrink"
		],
		"robotW": "spring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"sink",
			"sing",
			"spring",
			"ring",
			"shrink"
		],
		"robotW": "ring",
		"hardEasy": "hard",
		"scheme": "ung"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"sink",
			"sing",
			"spring",
			"ring",
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
			"kneel",
			"lean",
			"plead",
			"dream",
			"leap"
		],
		"robotW": "kneel",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"kneel",
			"lean",
			"plead",
			"dream",
			"leap"
		],
		"robotW": "lean",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"kneel",
			"lean",
			"plead",
			"dream",
			"leap"
		],
		"robotW": "plead",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"kneel",
			"lean",
			"plead",
			"dream",
			"leap"
		],
		"robotW": "dream",
		"hardEasy": "hard",
		"scheme": "v"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"kneel",
			"lean",
			"plead",
			"dream",
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
			"give",
			"see",
			"get",
			"hold",
			"write"
		],
		"robotW": "give",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"give",
			"see",
			"get",
			"hold",
			"write"
		],
		"robotW": "see",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"give",
			"see",
			"get",
			"hold",
			"write"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"give",
			"see",
			"get",
			"hold",
			"write"
		],
		"robotW": "hold",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"give",
			"see",
			"get",
			"hold",
			"write"
		],
		"robotW": "write",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"hit",
			"put",
			"tell",
			"go",
			"read"
		],
		"robotW": "hit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"hit",
			"put",
			"tell",
			"go",
			"read"
		],
		"robotW": "put",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"hit",
			"put",
			"tell",
			"go",
			"read"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"hit",
			"put",
			"tell",
			"go",
			"read"
		],
		"robotW": "go",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"hit",
			"put",
			"tell",
			"go",
			"read"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"come",
			"feel",
			"know",
			"sit",
			"keep"
		],
		"robotW": "come",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"come",
			"feel",
			"know",
			"sit",
			"keep"
		],
		"robotW": "feel",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"come",
			"feel",
			"know",
			"sit",
			"keep"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"come",
			"feel",
			"know",
			"sit",
			"keep"
		],
		"robotW": "sit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"come",
			"feel",
			"know",
			"sit",
			"keep"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"hear",
			"take",
			"find",
			"say",
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
			"take",
			"find",
			"say",
			"stand"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"hear",
			"take",
			"find",
			"say",
			"stand"
		],
		"robotW": "find",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"hear",
			"take",
			"find",
			"say",
			"stand"
		],
		"robotW": "say",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"hear",
			"take",
			"find",
			"say",
			"stand"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"make",
			"bring",
			"think",
			"leave",
			"lose"
		],
		"robotW": "make",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"make",
			"bring",
			"think",
			"leave",
			"lose"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"make",
			"bring",
			"think",
			"leave",
			"lose"
		],
		"robotW": "think",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"make",
			"bring",
			"think",
			"leave",
			"lose"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"make",
			"bring",
			"think",
			"leave",
			"lose"
		],
		"robotW": "lose",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"write",
			"give",
			"get",
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
			"give",
			"get",
			"see",
			"hold"
		],
		"robotW": "give",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"write",
			"give",
			"get",
			"see",
			"hold"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"write",
			"give",
			"get",
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
			"give",
			"get",
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
			"tell",
			"put",
			"go",
			"read",
			"hit"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"tell",
			"put",
			"go",
			"read",
			"hit"
		],
		"robotW": "put",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"tell",
			"put",
			"go",
			"read",
			"hit"
		],
		"robotW": "go",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"tell",
			"put",
			"go",
			"read",
			"hit"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"tell",
			"put",
			"go",
			"read",
			"hit"
		],
		"robotW": "hit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"know",
			"keep",
			"come",
			"feel",
			"sit"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"know",
			"keep",
			"come",
			"feel",
			"sit"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"know",
			"keep",
			"come",
			"feel",
			"sit"
		],
		"robotW": "come",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"know",
			"keep",
			"come",
			"feel",
			"sit"
		],
		"robotW": "feel",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"know",
			"keep",
			"come",
			"feel",
			"sit"
		],
		"robotW": "sit",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"stand",
			"take",
			"find",
			"say",
			"hear"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"stand",
			"take",
			"find",
			"say",
			"hear"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"stand",
			"take",
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
			"stand",
			"take",
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
			"stand",
			"take",
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
			"think",
			"lose",
			"leave",
			"make",
			"bring"
		],
		"robotW": "think",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"think",
			"lose",
			"leave",
			"make",
			"bring"
		],
		"robotW": "lose",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"think",
			"lose",
			"leave",
			"make",
			"bring"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"think",
			"lose",
			"leave",
			"make",
			"bring"
		],
		"robotW": "make",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"think",
			"lose",
			"leave",
			"make",
			"bring"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"get",
			"see",
			"write",
			"hold",
			"give"
		],
		"robotW": "get",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"get",
			"see",
			"write",
			"hold",
			"give"
		],
		"robotW": "see",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"get",
			"see",
			"write",
			"hold",
			"give"
		],
		"robotW": "write",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"get",
			"see",
			"write",
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
			"get",
			"see",
			"write",
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
			"tell",
			"hit",
			"read",
			"go",
			"put"
		],
		"robotW": "tell",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"tell",
			"hit",
			"read",
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
			"tell",
			"hit",
			"read",
			"go",
			"put"
		],
		"robotW": "read",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"tell",
			"hit",
			"read",
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
			"tell",
			"hit",
			"read",
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
			"know",
			"keep",
			"sit",
			"come",
			"feel"
		],
		"robotW": "know",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"know",
			"keep",
			"sit",
			"come",
			"feel"
		],
		"robotW": "keep",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"know",
			"keep",
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
			"know",
			"keep",
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
			"know",
			"keep",
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
			"hear",
			"stand",
			"say",
			"take",
			"find"
		],
		"robotW": "hear",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 1,
		"v1": [
			"hear",
			"stand",
			"say",
			"take",
			"find"
		],
		"robotW": "stand",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 2,
		"v1": [
			"hear",
			"stand",
			"say",
			"take",
			"find"
		],
		"robotW": "say",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"hear",
			"stand",
			"say",
			"take",
			"find"
		],
		"robotW": "take",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 4,
		"v1": [
			"hear",
			"stand",
			"say",
			"take",
			"find"
		],
		"robotW": "find",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 0,
		"v1": [
			"lose",
			"make",
			"bring",
			"think",
			"leave"
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
			"bring",
			"think",
			"leave"
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
			"bring",
			"think",
			"leave"
		],
		"robotW": "bring",
		"hardEasy": "easy"
	},
	{
		"type": "drawManyWord",
		"user": 3,
		"v1": [
			"lose",
			"make",
			"bring",
			"think",
			"leave"
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
			"bring",
			"think",
			"leave"
		],
		"robotW": "leave",
		"hardEasy": "easy"
	},
	{
		"type": "drawCommand",
		"v1": "END of Verbal Test",
		"v2": "Thank you for finishing this task.",
		"sound": "instructions/inst_cheers1.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Introduction",
		"v2": "This task is a visual decision task. On the left hand side, you will see three bars, labeled A, B, and C. On the right hand side, you will see a reference bar. You will simply have to say the letter corresponding to the bar on the left that is the same height as the bar on the right.",
		"sound": "instructions/inst_visual1.mp3"
	},
	{
		"type": "drawAsch",
		"v1": 0.9750000000000005,
		"v2": 0.025,
		"v3": 0.175,
		"answer": 0.9750000000000005,
		"answernr": 0,
		"loudRobot": false,
		"sound": "instructions/inst_all_practice.mp3"
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
		"sound": "instructions/inst_visual_pr0.mp3"
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
		"sound": "instructions/inst_visual_pr1.mp3"
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
		"sound": "instructions/inst_visual_pr2.mp3"
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
		"sound": "instructions/inst_visual_pr3.mp3"
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
		"sound": "instructions/inst_visual_pr4.mp3"
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
		"sound": "instructions/inst_visual_pr5.mp3"
	},
	{
		"type": "drawCommand",
		"v1": "Visual test",
		"v2": "Here comes the task. It consists of about thirty rounds.",
		"sound": "instructions/inst_all_t.mp3"
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
		"type": "drawCommand",
		"v1": "END of Experiment",
		"v2": "The test is now complete. Thank you for participating. Please talk to the research assistant before you leave.",
		"sound": "instructions/inst_cheers2.mp3"
	}
];