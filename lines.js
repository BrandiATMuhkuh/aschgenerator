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
  processing.textFont(font,50); 

  processing.draw = function() {
    
    processing.size(window.innerWidth-50, window.innerHeight-50);
    
    
    var barHeight = processing.height*0.9;
    var barWidth = processing.width*0.9;
   
    // determine center and max clock arm length
    //var centerX = processing.width / 2, centerY = processing.height / 2;
    //var maxArmLength = Math.min(centerX, centerY);

    processing.strokeWeight(1);
    processing.fill(0);

    var percent = 0.95;
    var topOffset = 50;
    var betweenOffset = barWidth*0.16;

    // First Line
    processing.rect(betweenOffset, barHeight, 10, -(barHeight * lineOnePercentage));    
    processing.text("A", betweenOffset-10, barHeight+50); 
    
    
    // Second Line
    processing.rect(betweenOffset*2, barHeight, 10, -(barHeight * lineTwoPercentage));
    processing.text("B", betweenOffset*2-10, barHeight+50); 
    

    // Third Line
    processing.rect(betweenOffset*3, barHeight, 10, -(barHeight * lineThrePercentage));
    processing.text("C", betweenOffset*3-10, barHeight+50); 
  
    

    // Comparision      
    processing.rect(betweenOffset*5.5, barHeight, 10, -(barHeight * compPercent));
    processing.text("?", betweenOffset*5.5-10, barHeight+50); 
  
    

  };
}



var canvas = document.getElementById("myCanvas");
// attaching the sketchProc function to the canvas
var processingInstance = new Processing(canvas, sketchProc);



