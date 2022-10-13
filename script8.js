console.log("Callback");
/*callbacks are the great way to handle something after something else has been completed
by something here we means function execution

Bnenfit of callback
it help us  develop asyncronus js and keep us safe from problems and errors.
*/
// function greet(name){
//     console.log("hi"+" "+name);
// }
// greet();//hi undefined
// greet('coders');
//in js you can also pas a function .this function that is passed as an argument inside of an other 
// function is called callbacck 
// function greet(name,callback){
//     console.log('hi'+" "+name);
//     callback();
// }
// function callMe(){
//     console.log("i am a callback function");
// }
// greet('coders',callMe);
// //benefits of callback
// //you can wait for the result of a previous function call and then execute another function
// //using setTimeout();
//  function greet(){
//     console.log("hello world");//hello world
//  }
//  function sayName(name){
//     console.log("hello"+" "+name);//hello sundar
//  }
//  setTimeout(greet,3000);
//  sayName("sundar");
//another program
 function greet(){
    console.log("hello world");//hello 
    //excuted after greet() to exceuted
    myFunction(name);
 }
 function sayName(name){
    console.log("hello"+" "+name);//hello sundar
 }
 //calling the function after 3 seconds
 setTimeout(greet,3000,"sundar",sayName);
 