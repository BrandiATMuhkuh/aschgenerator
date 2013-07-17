window.aschTracks = [];
window.aschResults = [];
window.excludeIds = ["72ccc272d29a684a","14f59de248141a77","2031318a5fa4b87e", "6ecf3abea85e3adb"];

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
    for(var i = 0; i < trackers; i+=1){
      slideAverage += window.aschTracks[i].data[k].thinkTime;
      
      if(window.aschTracks[i].data[k].result != window.aschTracks[i].data[k].correct){
        incorrect += 1;
      }
    }
    
    window.configSlides[k].wrongs = incorrect;
    window.configSlides[k].average = (slideAverage/trackers);
  }
}

function showAverage(){
  
  var problems = 0;
  for(var k = 0; k < window.configSlides.length; k+=1){
    if( window.configSlides[k].wrongs > 2){
      problems+=1;
      console.log(k, window.configSlides[k].wrongs, window.configSlides[k].average);
    }
  }
  
  console.log("problems: ",problems);
}



