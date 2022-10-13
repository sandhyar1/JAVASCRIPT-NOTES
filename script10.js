console.log("this keyword");
//this refrence to the object that is currently calling the functions.


//inside a method
//this ===(to object that is calling method)
// const user ={
//     firstName:"sandhya",
//     getName: function(){
//         return this.firstName;
//     }
// }
// user.getName();//sandhya 

//inside a function declaration/expression
//  function display(){
//     console.log(this);
//  }
//  display();//here this === window object

//with strict mode
// "use strict";
// function display(){
//     console.log(this);
// }
// display();//here this===undefined 

//with arrow function
//it does not have their own property they take the value from the surrounding
//function and if sunrrounding function is not present it will point to global object
// const display = () =>{
//     console.log(this);

// }
// display();//window

// const user ={
//     firstname:"sandhya",
//     getname: function(){
//         setTimeout(() => {
//             console.log(this.firstname);
//         },2000);
//     }
// }
// user.getname();//sandhya here its is usser object

//with event listener this===object(on which handler is attached)
// document.getElementById('btn').addEventListener('click',function(){
//     console.log(this);
// });
//click handler is atteched to the button object

//explicit binding
//call(),apply(),bind() are predefine medthods.
//they can used to call an object method with another object as an argument