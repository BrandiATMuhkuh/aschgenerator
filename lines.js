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
  window.currentSlide = mySlides[mySlidesPos];
  playSlideSound();

  //Listens to a key press and will play the next sound
  document.onkeyup = function(key){
    console.log("key up",key.keyCode);
    if(key.keyCode == 37 || key.keyCode == 39){
      if(key.keyCode == 37)
        window.mySlidesPos--;
      else
        window.mySlidesPos++;

      window.currentSlide = mySlides[mySlidesPos];
      playSlideSound();
    }
  }

  function playSlideSound(){
    if(typeof window.currentSlide.sound != 'undefined')
      soundManager.createSound({url: 'sounds/'+window.currentSlide.sound}).play();
  }
  


  processing.draw = function() {
    processing.size(window.innerWidth, window.innerHeight-5);    
    
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
    }
    
    
    //Identify users
    processing.strokeWeight(5);


    
    if(typeof currentSlide.user != 'undefined'){


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

}










