console.log("error handling and try catch");

//pretend this is coming from the server as response
 let a ="harry";
 a=undefined;
 if(a != undefined){
    throw new Error('this is not undefined');
 }
 else{
    null.console.loge
    console.log("this is undefined");
 }


 try {
    //hsnxjsmx
    console.log("we are inside try block");


    functionHarry();
    
 } catch (error) {
    console.log("r u okay");
    console.log(error);
    //console.log(error.message);
    //onsole.log(error.name);
    
 }
 finally{
    console.log("we will run this");
 }