//we can intlize functions arrown functions
// //var arr =  getname()
// const arr = () =>{
//     console.log()
// }
// function arr(){

// }


var x= 1;//global scope
a();
b();
console.log(x);

 function a(){
    var x=10;
    console.log(x);
 }
 function b(){
    var x=100;
    console.log(x);
 }
 //x=10 ,100 has local,function or block scope{}