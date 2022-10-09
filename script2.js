console.log("notes of Js with example");
console.log("SCOPE,DATATYPES,NULL AND UNDEFINED");

//SCOPE
//1.Scope means variable access.These baoundaries put restictions on variables 
//and determine whether you have have to acsess variable or not.
//it limits the  visiblity or availablity

//2 scopes-
//1.LOCAL SCOPE-allows everything within the boundaries.
//2.GLOBAL SCOPE--allows everything outside the box.A global scope can not access a variable
// defined in a local scope becuase it is enclosed from the outer world.
//example of scope
function showName() {//local scope
    //let name = 'scope ';
    //console.log(name);
}
showName();


//hoisting refers to the process whereby the interpreter appears to move the 
//declarations of functions,variables or classes to the top of their scope,before execution of the code.

//function hoisting
showName('sandhya');
function showName(name){
   // console.log(name);
}

function showName(name){
    //console.log(name);qq
}
showName('sandhya');

//variable and class declarations are also hoisted so they can be refrenced before they are declasred
//but they lead to error  //not recommmended
//console.log(num);//throws an unexpected error 
//num=7;//intilization

//it works
// a='yellow';
// b='greeem';
// console.log(a+" "+b);
//js only hoist decalartion not intilizations

// console.log(num);//undefined
// var num;
// num=9;
//console.log(num);//9

// console.log(num);//undefimed
// var num=0;
// console.log(num);//0

//variable are containers that store values.declaring and intilization
//Js is case sensitive
// let myVariable="23";
// console.log(myVariable);
// console.log(MyVariable);//case sensitve gives and error

//it can declare by the using:
//var,let,const,nothing
//Use of var-1995-2015
//let and const are features of Es6

//JS data types
/*Five basic primitive data type 
1.String--"string",'',``
2.numbers--23
3.Boolean--(true.false)
4.null
5.undefined
dynamic typing
JS is loosely typed and dynamic language.Variables in js are not 
directly associated with any particular value type and any particular value typeand any variable
can be assigned and reassigned(value of all types):
objects
Symbol
All types except define immutable values (that is value can'y change)Strings are immutable
boolean type
const a =true;
const b=  false;
*/ 
//NUll values -intentional abxsence of any object value.it is treated as falsy value
// function getValues(str){
//     const  a= str.match(/[aeiou]/gi);
//     if(a===null){

//         return 0;
//     }
//     return a.length;
// }
// console.log(getValues("apple"));//2 vowels

//here foo is undefined that does not even exist 
// foo;//foo doest not exist//undefined
// const foo = null;//here foo exist and not it has null value
// foo;//null

//NULL VS UNDEFINED
// console.log(typeof null);//object(not nul for legacy reason)
// console.log(typeof undefined);///undefined
// console.log( null== undefined); //false
// console.log(null === undefined);//true
// console.log(null == null);//true
// console.log(null === null); //false;
// console.log(!null)//true
// console.log(!isNaN(1+null))//false
// console.log( !isNaN(1+undefined))//true
//Null is a special value that represents that represents unknown and empty value.
// let num = null;
// function getValues(str){
//     const  a= str.match(/[aeiou]/gi);
//     if(a===null){

//         return 0;
//     }
//     return a.length;
// }
// console.log(getValues("apple"));//2 vowels

//undefined 
//property  and variable global scope
//A variable that has not  assigned a value is of type undefined.
//A method or statements also returns undefined if the variables that is being evaluateddoes not have assigned value.
//A function returns undefined if a value was not returned.
// function test(t){
//     if(t=== undefined){
//         return 'Undefined value';
//     }
//     return t;
// }
// let x;
// console.log(test(x));//undefined value;

//using with strict equality and undefined
// let x;
// if(x === undefined){
//     //thse statemnts are executed(true)
// }
// else{
//     //thse statemnts are not  executed(false)
// }
//Strict equality:
//x=== undefined also checks x is null, while strict equalty doesnot/this is because null is not equal to undefined.
