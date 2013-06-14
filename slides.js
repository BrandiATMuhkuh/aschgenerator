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

			case "randWords":					
				var sArray = shuffle(window.configSlides[i].words);

				for (var t = 0; t < 5; t++){
					window.mySlides.push({
						type : "drawWord",
					  	user : t,
						v1 : sArray[t].word,
						sound : sArray[t].sound,
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

			default:
				window.mySlides.push(window.configSlides[i]);
		}
	}

}

window.configSlides = [
	{
	  	type : "drawCommand",
	  	v1 : "HELLO You. How is it going?",
	  	v2 : "On the next slide I'll show you some instruction. Please read them and click SPACE to go to the next page. ",  	
		sound : "s1.mp3",
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
		type : "randAsch",
		count : 5
	},
	{
		type : "randWords",
		words: [
			{
				sound : "know1.mp3",
				word : "know"
			},
			{
				sound : "show1.mp3",
				word : "show"
			},
			{
				sound : "grow1.mp3",
				word : "grow"
			},
			{
				sound : "give1.mp3",
				word : "give"
			},
			{
				sound : "cheat1.mp3",
				word : "cheat"
			}
		]
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