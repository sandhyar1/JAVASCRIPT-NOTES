console.log("for-in vs for-of diffrence");//important

let people =["harry","rohan","vaibhav","sandhya"];

//traditional for loop
// for(let index=0; index<people.length;index++){
//     const element = people[index];
//     console.log(element);
// }

//for in loop
let obj ={
    name:"sandhya",
    language: "javascript",
    hobbies: "software developer"

}
//console.log(obj);

//iterating an object
// for(let index=0; index< Object.keys(obj).length; index++){
//         const element = obj[Object.keys(obj)[index]];
//         console.log(element);
//     }
//use for taking index in array and object
//iterating an object using for in loop
for(let key in obj) {//if we want to take object keys
   // console.log(obj.key);//it gives us undefined
   //console.log(obj[key]);
}
//we can use for in with to loop through all the characters
myString = "This is my string";
for(let char in myString) {//if we want to take object keys
    //console.log(myString[char]);
 }

 myString = "This is my string";
for(let char of myString) {//if we want to take object keys
    //console.log(myString[char]);
 }

 /*************for of loop **************/
 console.log("for of loop starts here");
 people =["harry","rohan","vaibhav","sandhya"];

for(let name of people){//use for taking array items 
    //console.log(name);
}
for(let name of myString){//use for taking array items 
    console.log(name);
}