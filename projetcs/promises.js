console.log("promises in js")/***************************/
// 3 stages of promise 
//promise - resolve 
//promise - reject
//promise - pending
//use as a substitute of callback()

// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error = true;
//             if(!error) {         
//              console.log(" function: your promise has been resolved");
//             resolve();
//             }
//             else{
//                 console.log("function: your promise has not been resolved");
//                 reject("sorry not fulfiled");
//             }
//         },2000);
//    })
// }
// func1().then(function(){//this is for resolve
//     console.log("harry: thanks for resolving");
// }).catch(function(error){//this is for reject
//     console.log("harry: very bad"+ error);
// })


//callback() used as a promise()
// const  students = [
//     {name: "harry", subject: "javascript"},
//   {name: "rohan", subject: "machine learning"}
// ]
// //students.forEach()//function is syncronus


// //function enroll 
// function enrollStudent(student){
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         students.push(student);
//         console.log("student has been enrolled");
//         const error = false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject();
//         }            //getstudents() function in function
//         },3000);
//    })
// }
// //function getStudents()
// function getStudents(){
//     setTimeout(function() {
//         let str= "";
//         students.forEach(function(student){
//             str +=`<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML= str;
//         console.log("student have been fetched");
       
//     },1000);

// }

// let newStudent = {name:"sunny", subject:"springboot"}
// enrollStudent(newStudent).then(function(){
// getStudents();
// }).catch(function(){
//     console.log("the error occured");
// })
// //getstudents();
// //function inside then is rans as - resolve();
// //function inside then is rans as - reject();
// //