try{}  => Let's you test a block of code for errors
          (Must be valid js)

catch () {}  => let's you handle the error
             (Must be valid js)

finally {}  => let's you  execute code after trying catch{} regardless of the result;
                code always runs regardless of previous outcome
             (Does not have to be valid js)

throw{} => let's you create custom errors
         
          

example
 try{

      console.log("This is how you should handle errors");
      unicycle; /* error */
      console.log("End of error trial run");
}
catch(err){
      console.log("Error in the code:" + err.stack ");
      }
finally{
      console.log("Error trial successful");}
or
let jsee = "age : 45"
  try{
    let age = JSON.parse(jsee)
      if(!username) {
                    /*throw error */   throw new syntaxError("This is the error") 
              console.log(user.name)
            }
              
  }
  catch(err){
        console.log("Here is the error that you are looking for:" + e);
     }
/* check console if you are using the browser to test this code */
