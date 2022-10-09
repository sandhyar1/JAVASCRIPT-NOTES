console.log("JS modules and basics of es6");
//A module in js is a file containinhg related code.we use import and export keywords to share and recieve functionalities respectively across difeerenr modules.
//.break up code into separate files.
//.easier to  maintain code -base
//exporting a function
// export function greetPerson(){
//     return `Heloo$(name)`;
// }

// //import greet functions from greet.js file
// import {greetPerson} from './greet.js';
// //using greetPerson () fdefined in the greet.js
// let displayName =greetPerson('jack');
// console.log(displayName);//hello jack

// NOTE:u can only access exported functions,objects etc from the module.
// U need to use export  keyword for the particular functions,object to import them and to use 
//in other File
//using of module
//1.code bas eis easiaer to to maintain different code having different functinalities aree in diffrent files.
//2.code reusability

//ES6 BASICS
// Ecma Script(version 6)-Brenard Eich(2015)
// 1.let is used to decalre varibales//block scoped
// (They can be only accessible with in a particular block)
let name ="happy";
{

    let name ="happyw";
    console.log(name);
}
console.log(name);

//2.const variable
//cannot change the value of a const variable.
//cannot be redeclared.
//cannot be reassigned.
//have  a block scope.
// use -when the value of should not be changes .
//using const -- 
// declare Array,objects,function,RegExp
//cannot reassign value,array,object
//but u can:change the elemnts of const array
//properties of const object;

//3.ARROW FUNCTION
//function expression
// let x = function(x,y){
//     return x*y;
// }
//by arrow function
// let x =(x,y)=> x*y;

//Syntax of arrow function(one liner function)
let myFunction=(arg1,arg2,...argn) =>expressions