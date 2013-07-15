
function sketchProc(processing) {
  // Override draw function, by default it will be called 60 times per second
  
  var lineOnePercentage = Math.random();
  var lineTwoPercentage = Math.random();
  var lineThrePercentage = Math.random();

  //background color
  processing.background(255);
  
  

  //cal comparison one 
  var oneTwoThree = Math.floor((Math.random()*3));
  var compPercent = lineOnePercentage;
  if(oneTwoThree == 1)
      compPercent = lineTwoPercentage;
  else if (oneTwoThree == 2)
      compPercent = lineThrePercentage;

  
  //Define text fonts
  var font = processing.loadFont("FFScala.ttf"); 
  


  
  window.mySlidesPos = 0;

  if(window.location.hash.substring(1) != ""){
    window.mySlidesPos = window.location.hash.substring(1);
  }


  window.currentSlide = mySlides[mySlidesPos];
  playSlideSound();

  //Listens to a key press and will play the next sound
  document.onkeyup = function(key){
    console.log("key up",key.keyCode);
    if((key.keyCode == 37 || key.keyCode == 32 || key.keyCode == 39) && !configUser.abc){
      if(key.keyCode == 39 || key.keyCode == 32)
        nextPage(true);
      else
        nextPage(false);
    }else{
      if(key.keyCode == 49 || key.keyCode == 50 || key.keyCode == 51){


        var rest = {"slidenr":123,"userid":123,"result":123};

        if(key.keyCode == 49 ){
          rest.slidenr = 1;
        }else if(key.keyCode == 50 ){
          rest.slidenr = 2;
        }else if(key.keyCode == 51 ){
          rest.slidenr = 3;
        }
        rest.userid = window.document.globalUserId;

        dpd.results.post(rest,function(){});

        nextPage(true);
      }
    }
  }


  /**
   * Lets listen to changes :D
   * 
   */
  dpd.remote.on('put', function(message) {
    console.log(message);
    nextPage(message.pageNr);
  });

  /**
   * goes to next page or page number
   * @param  {Function} next true = next page, false = pre page, number = goTo number
   */
  function nextPage(next){

    if(next===true){
      window.mySlidesPos++;

      if(window.mySlidesPos>=window.mySlides.length){
        window.mySlidesPos=window.mySlides.length-1;
      }

    }else if(next===false){
      window.mySlidesPos--;
      if(window.mySlidesPos<0){
        window.mySlidesPos=0;
      }
    }else if(typeof next === 'number'){
      window.mySlidesPos = next;
    }

    //set has values
    window.location.hash="#"+window.mySlidesPos;

    window.currentSlide = mySlides[mySlidesPos];
    playSlideSound();

  }

  function playSlideSound(){
    if(typeof window.currentSlide.sound != 'undefined')
      soundManager.createSound({url: 'sounds/'+window.currentSlide.sound}).play();

    /*
    switch(currentSlide.type){
      case "trainingWord":
        //soundManager.createSound({url: 'sounds/'+currentSlide.v1.sound}).play();
        //soundManager.createSound({url: 'sounds/'+currentSlide.v2.sound}).play();

        soundManager.createSound({
          url: 'sounds/'+currentSlide.v1.sound,
          onready : function(){
            console.log("ready");
            soundManager.createSound({url: 'sounds/'+currentSlide.v2.sound}).play();
          }
        }).play();
      break;
    }*/
  }
  

  processing.draw = function() {

    processing.size(window.document.canvasWidth, window.document.canvasHeight);    
    
    switch(currentSlide.type){
      case "drawAsch":
        drawAsch(currentSlide.v1, currentSlide.v2, currentSlide.v3, currentSlide.answer);
      break;

      case "drawCommand":
        drawCommand(currentSlide.v1, currentSlide.v2);
      break;

      case "drawWord":
        drawWord(currentSlide.v1);
      break;

      case "trainingWord":
        trainingWord(currentSlide.v1,currentSlide.sound);
      break;

      case "drawManyWord":
        drawManyWord(currentSlide.v1[0],currentSlide.v1[1],currentSlide.v1[2],currentSlide.v1[3],currentSlide.v1[4]);
      break;
    }
    
    
    //Identify users
    processing.strokeWeight(5);


    if((typeof currentSlide.user != 'undefined') && configUser.multi){


      //calc user squeres
      var leftOffset = (processing.width - (4 * 100))/4;

    
      processing.stroke(142, 68, 173);
      if(currentSlide.user == 0){
        processing.fill(142, 68, 173);
      }else{
        processing.fill(255); 
      }
      processing.rect(100, 20, 100, 100);


      
      processing.stroke(41, 128, 185);
      if(currentSlide.user == 1){
        processing.fill(41, 128, 185);
      }else{
        processing.fill(255); 
      }
      processing.rect(100+leftOffset, 20, 100, 100);
      
      processing.stroke(39, 174, 96);
      if(currentSlide.user == 2){
        processing.fill(39, 174, 96);
      }else{
        processing.fill(255); 
      }
      processing.rect(100+leftOffset*2, 20, 100, 100);
      
      processing.stroke(211, 84, 0);
      if(currentSlide.user == 3){
        processing.fill(211, 84, 0);
      }else{
        processing.fill(255); 
      }
      processing.rect(100+leftOffset*3, 20, 100, 100);
      
      processing.stroke(243, 156, 18);
      if(currentSlide.user == 4){
        processing.fill(243, 156, 18);
      }else{
        processing.fill(255); 
      }
      processing.rect(100+leftOffset*4, 20, 100, 100);

    }

  };



  /**
   * Draws a simple ash line. a,b,cSize, anwer are in percent (0-1)
   * @param  {float} aSize  first value between 0-1
   * @param  {float} bSize  second value between 0-1
   * @param  {float} cSize  third value between 0-1
   * @param  {float} answer anser must be a,b or c
   */
  function drawAsch(aSize, bSize, cSize, answer){
    processing.textFont(font,50); 
    var barHeight = processing.height-190;
    var barWidth = processing.width*0.8;


    processing.strokeWeight(1);
    processing.fill(0);

    var percent = 0.95;
    var topOffset = 50;
    var betweenOffset = barWidth*0.16;
    var bottomOffset = 130;

    processing.textAlign(processing.CENTER);
    // First Line
    processing.rect(betweenOffset, barHeight+bottomOffset, 10, -(barHeight * aSize));    
    processing.text("A", betweenOffset+6, barHeight+bottomOffset+50); 
    
    
    // Second Line
    processing.rect(betweenOffset*2, barHeight+bottomOffset, 10, -(barHeight * bSize));
    processing.text("B", betweenOffset*2+6, barHeight+bottomOffset+50); 
    

    // Third Line
    processing.rect(betweenOffset*3, barHeight+bottomOffset, 10, -(barHeight * cSize));
    processing.text("C", betweenOffset*3+6, barHeight+bottomOffset+50); 
  
    

    // Comparision      
    processing.rect(barWidth+betweenOffset, barHeight+bottomOffset, 10, -(barHeight * answer));
    processing.text("?", barWidth+betweenOffset+6, barHeight+bottomOffset+50); 


    
  }


  function drawCommand(headline, description){
    processing.strokeWeight(1);
    processing.fill(0);
    processing.textAlign(processing.CENTER);

    //Headline
    processing.textFont(font,50); 
    processing.text(headline, processing.width/2, 100); 

    //Description
    processing.textFont(font,40); 
    processing.text(description, 0, 200, processing.width, processing.height); 

  }

  function drawWord (word) {
    processing.strokeWeight(1);
    processing.fill(0);
    processing.textAlign(processing.CENTER);

    processing.textFont(font,100); 
    processing.text(word, processing.width/2, processing.height/2); 
    
  }

  function drawManyWord (w0,w1,w2,w3,w4) {
    processing.strokeWeight(1);
    processing.fill(0);
    processing.textAlign(processing.CENTER);

    processing.textFont(font,100); 
    var offset = 130;
    processing.text(w0, processing.width/2, processing.height/3); 
    processing.text(w1, processing.width/2, processing.height/3+1*offset);
    processing.text(w2, processing.width/2, processing.height/3+2*offset); 
    processing.text(w3, processing.width/2, processing.height/3+3*offset); 
    processing.text(w4, processing.width/2, processing.height/3+4*offset); 
    
    
  }

  function trainingWord (word, answer){
    processing.strokeWeight(1);
    processing.fill(0);
    processing.textAlign(processing.CENTER);

    processing.textFont(font,100); 
    processing.text(word, processing.width/2, processing.height/2); 
    


  }

}










