window.aschTracks = [];
window.aschResults = [];
window.excludeIds = ["72ccc272d29a684a","14f59de248141a77"];

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
         
         if(thinking != null){
           window.aschResults[k].thinkTime = window.aschResults[k].date - thinking;
         }else {
           window.aschResults[k].thinkTime = 0;
         }
         
         window.aschTracks[i].data.push(window.aschResults[k]);
         
         thinking = window.aschResults[k].date;
       }
     }
   }
   
   // clean configue slides
   cleanConfigSlides();
   // create average
  
}

function cleanConfigSlides(){
  




}


