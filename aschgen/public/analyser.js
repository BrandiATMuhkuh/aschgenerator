window.aschTracks = [];
window.aschResults = [];
window.excludeIds = ["72ccc272d29a684a","14f59de248141a77","2031318a5fa4b87e", "6ecf3abea85e3adb"];
window.excludeIds = ["72ccc272d29a684a","14f59de248141a77",]; //without times
/**
* Get all people  
*/
dpd.newtrack.get(function (result, err) {


  for(var i = 0; i < result.length; i+=1){
    if(window.excludeIds.indexOf(result[i].id) === -1){
      window.aschTracks.push(result[i]); 
    }
  }
     
  /**
  * get all results
  */
  queryAllResutls(0);
  
  
  
});


function queryAllResutls(skip){
    var limit = 500;
    var query = {$limit: limit,$skip: skip, $sort: {slidenr: 1}};
    dpd.results.get(query, function (result, err) {
      
      if(result.length === 0){
        startStats();
        return;
      }
      aschResults = window.aschResults.concat(result); 
      queryAllResutls(skip+limit);
    });
}


function startStats(){
   console.log("startStats", window.aschResults.length);
   
   for(var i = 0; i < window.aschTracks.length; i+=1){
     console.log("create data array");
     window.aschTracks[i].data = new Array();
     
     var thinking = null;
     
     for(var k = 0; k < window.aschResults.length; k+=1){
       if(window.aschTracks[i].id === window.aschResults[k].userid){
         
         //console.log(window.aschResults[k].date);
         if(thinking != null){
           window.aschResults[k].thinkTime = window.aschResults[k].date - thinking;
         }else{
           thinking=0;
         }
         
         window.aschTracks[i].data.push(window.aschResults[k]);
         
         thinking = window.aschResults[k].date;
       }
     }
   }
   
   // clean configue slides
   cleanConfigSlides();
   
   // create average
   createAverage();
   
   //show averages
   showAverage();
    
}

function cleanConfigSlides(){
  
  var cfiles = [];
  for(var k = 0; k < window.configSlides.length; k+=1){
    
    if(window.configSlides[k].type === "drawAsch"){
      cfiles.push(window.configSlides[k]);
    }
  }


  window.configSlides = cfiles;
}

function createAverage(){
  var trackers = window.aschTracks.length;
  
  for(var k = 0; k < window.configSlides.length; k+=1){
    var slideAverage = 0;
    var incorrect = 0;
    var tinkCount = 0;
    for(var i = 0; i < trackers; i+=1){
      if(window.aschTracks[i].data[k].thinkTime){
        slideAverage += window.aschTracks[i].data[k].thinkTime;
        tinkCount+=1
      }
      
      if(window.aschTracks[i].data[k].result != window.aschTracks[i].data[k].correct){
        incorrect += 1;
      }
    }
    
    window.configSlides[k].wrongs = incorrect;
    
    window.configSlides[k].average = (slideAverage/tinkCount);
    
    if(isNaN(window.configSlides[k].average)){
      window.configSlides[k].average=0;
    }
  }
}

function showAverage(){
  
  var csv = "";
  csv += "Slide,Mistakes,Average Time, V1,V2,V3,Min Delta\n";
  var problems = 0;
  for(var k = 0; k < window.configSlides.length; k+=1){
    //if( window.configSlides[k].wrongs > 5){
    {
      csv+= k +","+ window.configSlides[k].wrongs +","+ parseInt(window.configSlides[k].average) +","+ window.configSlides[k].v1.toFixed(3)  +","+ window.configSlides[k].v2.toFixed(3) +","+ window.configSlides[k].v3.toFixed(3);
      //console.log(k +"\t"+ window.configSlides[k].wrongs +"\t"+ parseInt(window.configSlides[k].average) +"\t"+ window.configSlides[k].v1.toFixed(3) +"\t"+ window.configSlides[k].v2.toFixed(3) +"\t"+ window.configSlides[k].v3.toFixed(3));
      
      var ta = Math.abs(window.configSlides[k].v1.toFixed(3) - window.configSlides[k].v2.toFixed(3));
      var tb = Math.abs(window.configSlides[k].v2.toFixed(3) - window.configSlides[k].v3.toFixed(3));
      var tc = Math.abs(window.configSlides[k].v3.toFixed(3) - window.configSlides[k].v1.toFixed(3));
      var tarr = [ta,tb,tc];
      tarr.sort(function(a,b){return a - b});
      //console.log(tarr);
      csv+=","+tarr[0].toFixed(3);
      problems+=1;
      csv+="\n";
    }
    
    
    
  }
  console.log(csv);
  console.log("problems: ",problems, window.configSlides.length);
}



