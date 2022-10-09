console.log("Arrow functions");
/*Arrow functions are anonmous functions without a name and not bound with
an identifier.don,t return any value and can declare without function keyword.
It cannot be used as constructors.
The context within arrow functions is lexically or statically defined.
also called lambda functions in different languages.

Syntax of arrow functions:
let myFunction =(arg1,arg2,...argn) =>expression.

//arrow function with no argument 
let greet =()=> console.log("hello");
greet();//hello

//with one argument
let greet =(name) => console.log(name);
greet('hello');

//as an expression(also create it dynamically)*/
// let age =5;
// let welcome =(age<15) ? () => console.log('baby'): () => console.log("adbul");
// welcome();//baby 


// //MUltiline arrow function
// let sum =(a,b) => {
//     let result = a+ b;
//     return result;
// }
// let result1  = sum(3,5);
// console.log(result1);//8

//this with arrow function
//this keyword refers to the function where it is called.it is not associated with arrow functions.
//arrow functions does not have their own this.so whenever you call it refers to parent scope.

//inside a regular function
// function Person() {
//     this.name="sandhya",
//     this.age='25',
//     this.sayName =function(){
//         //this is accessiable
//         console.log(this.age);//25
//         //this refers to the global object
//         function innerfunc(){
//             console.log(this.age);//undefined
//             console.log(name);//window object{}
//         }
//         innerfunc();

//     }


// let x= new Person();
// x.sayName();


//Benifits of arrow functions
//2 major benefits:
//shorter syntax and require less code

//use of arrow function instead of normal function
//regular functions created a functions  declarations or expressions 
// are constructible and callable.

//this with arrow function
// function Person() {
//     this.name="sandhya",
//     this.age='25',
//     this.sayName =function(){
//         //this is accessiable
//         console.log(this.age);//25
//         //this refers to the global object
//         function innerfunc(){
//             console.log(this.age);//undefined
//             console.log(this);//window object{}
//         }
//         innerfunc();

//     }
// }
// let x= new Person();
// x.sayName();
// //this.name and this.age is accessible because this.sayname() is accessible is the method 
// // of an Object.apply
// however,innerfunc() is a normal function and this.age is not accessible because this refers to the global object
// this.age in the innerfunc() gives undefined.

//inside an arrow function
// function Person() {
//     this.name="sandhya",
//     this.age='25',
//     this.sayName =function(){
//         //this is accessiable
//         console.log(this.age);//25
//         //this refers to the global object
//         let  innerfunc= () =>{
//             console.log(this.age);//25
        
//         }
//         innerfunc();

//     }
// }
// let x= new Person();
// x.sayName();
// //here innerfunc() is defined as an anonmouys function.Inside the arrow function,this refers
//to the parent,s scope.hence it gives 25.

//Arguments binding
//regular functions have arguments binding.that's why we pass arguments to a regular function
//it can access them using argumemts keyword,
// let x  = function(){
//     console.log(arguments);
// }
// x(4,5,6)//arguments
//arrow functions do not have argumnets binding.when you try to acess an argumnet 
//using arrow function it will gives an error.
// let x =() =>{
//     console.log(arguments);
// }
// x(4,5,6);//refrence error ,can't find variable argumnets

//to solve this issue we use spread operator
let x =(...n) =>{
    console.log(n)

}
x(4,6,7);//[4,6,7]