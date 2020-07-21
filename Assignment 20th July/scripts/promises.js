console.log("Promises !!");


var promise = new Promise(function(resolve, reject) {
    const x = "promises";
    const y = "promises"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
   
  promise.
      then(function () {
          console.log('Success !!');
      }).
      catch(function () {
          console.log('Error has occured');
      });