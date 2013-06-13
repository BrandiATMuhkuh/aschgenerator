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

  


  processing.draw = function() {
    processing.size(window.innerWidth-50, window.innerHeight-50);    
    
    


    tempSclide = mySlides[mySlidesPos];
    switch(tempSclide.type){
      case "drawAsch":
        drawAsch(tempSclide.v1, tempSclide.v2, tempSclide.v3, tempSclide.v1);
      break;

      case "drawCommand":
        drawCommand(tempSclide.v1, tempSclide.v2);
      break;
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
    var barHeight = processing.height*0.9;
    var barWidth = processing.width*0.9;

    processing.strokeWeight(1);
    processing.fill(0);

    var percent = 0.95;
    var topOffset = 50;
    var betweenOffset = barWidth*0.16;

    // First Line
    processing.rect(betweenOffset, barHeight, 10, -(barHeight * aSize));    
    processing.text("A", betweenOffset-10, barHeight+50); 
    
    
    // Second Line
    processing.rect(betweenOffset*2, barHeight, 10, -(barHeight * bSize));
    processing.text("B", betweenOffset*2-10, barHeight+50); 
    

    // Third Line
    processing.rect(betweenOffset*3, barHeight, 10, -(barHeight * cSize));
    processing.text("C", betweenOffset*3-10, barHeight+50); 
  
    

    // Comparision      
    processing.rect(betweenOffset*5.5, barHeight, 10, -(barHeight * answer));
    processing.text("?", betweenOffset*5.5-10, barHeight+50); 
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
    processing.text(description, 50, 200, processing.width, processing.height); 

  }

}






var canvas = document.getElementById("myCanvas");
// attaching the sketchProc function to the canvas
var processingInstance = new Processing(canvas, sketchProc);


document.onkeyup = function(key){
  console.log("key up",key.keyCode);
  window.mySlidesPos++;
}
