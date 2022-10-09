console.log('Recursion in js');
console.log("excepions and  modules try..catch");
console.log("throw statement")


//recursion is aprocess of calling itself.programming pattern or concept
//a function that operates on the concept of recursion is called recursive function.
//mainly for problem solving that can be broken down onto smaller,repittitive problmes.
//gives clarity,reduces time and debug code,reduce space
// function recurse(){
//     //function code
//     recurse();//---calling function
//     //function code
// }
// recurse();;//----calling function


//try..catch

//try statement allows to define a block of code to be tested errrors.
//catch staterment  allows to define a block of a code to be executed of an error occurs. in the try block.
//these block is for handle errors.
//types of errors
//Syntax errors,Runtimr errors
// 1.syntax errors -spellling mistake
//runtime errors-that occours during the execution of the program.
//syntax
// try{
//     //body of try
// }
// catch(error){
//     //body of catch
// }

//try ctach exmaple
// const num=100 deno= 'a';
// try{
//     console.log(num/deno);
//     console.log(a);//forgot to define variable a
// }
// catch(error){
//     console.log("error occured");
//     console.log("error message"+ error);
// }
//o/p:NaN,an error occured,error message

//try catch finally example
//final executes both when the code runs sucessfully or if an error ocvours

// const n=100 d='a';
// try{
//     console.log(n/d);
//     console.log(a);
// }
// catch(error){
//     console.lof("an error ocuured");
//     console.log("error message"+ error);

// }
// finally{
//     console.log("finally this block is getting executed");

// }
//o/p:NaN,an error occured,error messgae,finally this block is executeed

//THROW STATEMENT
//user defined exceptions.Execution of current function will stop (the statement after throw statement won't be exceuted),and 
//control will be passed to the first catch block in the call stack it gives custom error.
//if a certain number divided by 0;
// const number = 5;
// throw number/0;//generates an exception when divided by 0;

//NOTE:expression-string,boolean,number or object value
//when the throw statement is executed,it exits out of the block and goes 
//to the catch block and code below throw statemnt is executed

//exmaple:
// const num =40;
// try{
//     if(num>40){
//         console.log("sucess");
//     }
//     else{
//         //user defined throw statement
//         throw new error("the number islow");
//     }
//     //if throw statement executes,the below code does not execute 
//     console.log('hello');
// }
// catch(error){
//     console.log("an error cought");
//     console.log("error message"+ error);
// }

// NOTE:also use built in error constructors for standard errors
// TypeError,Syntax error,Reference error,Eval error,Internal error,Range error

const a= 5;
try{
    throw an console.error();
}