console.log("Promise in js");
//to avoid callback hell situations we use Promise.
/*promise are used to hold asynchronous operations in js.they are easy to manage
when  dealing with multiple asynchronus operations where callbacks can create callback hell leading to unmangable  code.

They can handle multipke asyncronous opeartions  easily  and provoide better error
handling than callbacks and events. 

Benefits of promise:
=>improves code readiblity
=>better handling of asynchronous operations
=>better flow of control definition in anynchronous logic.
=>better errror handling
 
Four states of promise:
1.Fulfiled-action realted to the promise succeeded.
2.rejected-to promise failed or not fulfil.
3.pending- still pending or i.e. not fulfilled or rejected yet
4.settled: has fulfiled or rejected.

using constructor syntax:
 var promise = new Promise(function(resolve, reject)){
    ///
 }
 parameters:----
 =>only one argumnets which is a callback function and that callback is anonmouys function.
 =>callback (take 2 args (reolve,reject))
 =>perform operations inside the callback functions and if everything went well
 then call resolve if desired opeartions donot go well then reject.
 
 =>THumb rules for using promise
 -->use promise whenever you are using  asynchronous or blocking code
 -->resolves maps to then and reject maps to catch for all parctical purpse
 -->make sure to write both .catch and.then methods for all the ptomises
 -->if something needs to be done in thene use .finally
 --? we only get oneshot at muatating each promise.

 A promise starts ina pending state.that means the promise is not vomplete .if the opeartion 
 is successful, the process ends in a fulfiled statee and if an error occurs the process ends ina  rejected state.
 ex:when you request data fron the server by using a promise,it will be in a pending state.when the data arrives sucessfully,it will be in fulfiled state.when an error occurs
 thrn it will be in rejected state.
 */

//  var promise = new Promise(function(resolve,reject){
//     const x="techimind";
//     const y="techmind";
//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     }
//     });
// promise.
// then(function(){
//     console.log("Sucess,you are a geek");
// }).
// catch(function(){
//     console.log("some error has occured");//some erroe has occured
// });

//arrow function with promise and callback
// //ES5
// asyncFunction().then(function(){
//     return asyncFunction();
// }).then(function(){
//     return asyncFunction2();
// }).then(function(){
//     finish;
// });
// //ES6
// asyncFunction()
// .then(() =>asyncFunction())
// .then(() =>asyncFunction2())
// .then(()=>finish);

//1.not use arrow functions to create methods inside the objects
//2.cannot use arrow functions as a constructor
let Foo =()=>{};
let foo= new Foo();//typerrror:foo is not a construnctor.

//examolr:
// const count=true;
// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve("there is a countValue");
//     }else{
//         reject("there is no count value");
//     }
// });
// console.log(countValue);


// Promise chaining
//that aloows you to chain together multiple asynchronous tasks in specific order.
//A common need is to execute  two or more opartions back to back,where ieach subsequent
// operation starts when the previous operation suceeds,with the result of previous Stere

//chaining with then()
// let countValue = new Promise(function(resolve,reject){
//     resolve("Promise resolved");
// });
// countValue
// .then(function sucessValue(result){
//     console.log(result);
// })
// .then(function sucessValue(){
//     console.log("you can call multiple functions in this way");
// });
// output:Promise resolved
// ypu can call multiple fynctions in this way

//chaining with chatch
let countValue = new Promise(function(resolve,reject){
    resolve("Promise resolved");
});
countValue
.then(function sucessValue(result){
    console.log(result);
})
.catch(
    function errorValue(result){
        console.log(result);
    });
// output:Promise rejected