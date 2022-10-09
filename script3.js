console.log("Arrays");
/*Arrays are special type of object.
An arrays is an object that can store multiple values at one.
const arrays =["star","fish","gol"];
arrays is an array that storec 3 values.
Advantage :1.Randonly accesed elemnsts by index number.
2.contiguous memory location
3.Avoids memory overflow.
we can store numbers,Strings,boolean in a single memory.
// */

// //ways to create an arrays 2 ways
// //Array literal:
// const arr1 =["eat","sleep",1,2,"true"];

// //Using new keyword:
// const arr2 = new arr2["eat","cat","sleep","rabbit"];

// //NOTE: Always use array literal method to create to array.
// //examples:
// const array =[];
// const arra =[1,2,3];
// const string =["eat","create","sleep"];
// const mixedDtatype =["eat","create","sleep",1,2,3,"true","false"];
//inside object
// const newData=[
//     {task1:'excercise'},
//     [1,2,3],
//     function hello(){console.log('hello')}
// ];

//accessing array elemnts by index
// const myArr=[1,2,3,4]
//  console.log(myArr[4]);//undefined
//  console.log(myArr[0]);//1

//Array methods
// const myArra1 =[1,2,3,4,5,"truw"];
// myArra1.push("false");//push is inbuit method to add an elemts at the end of the arrays
// myArra1.unshift("code");//add at beginning of an array
// myArra1[3]="javascript";//by giving index change the elemenyt in an array
// myArra1[9]="array";//itgives emptyb elemnt
// myArra1.pop("array");//removes from end
// myArra1.shift("code");//removes from beginning
// console.log(myArra1.length);//gives length of array
// console.log(myArra1);
 

//conact() method merge two arrays:original arrays are copies into new array
//parameters cancat(),concat(value0),concat(value0value1...valueN)
//if all value  of valueN parameters are omitted, concat a shallow copy of exixting array on which itis called
// const mergeArray = [1,2,3,4,5];
// const mergeArray1 = ["tea","coffee"];
// const mergeArray2 =mergeArray.concat(mergeArray1);
// console.log(mergeArray2);
//does not change existing array but renturns new array
//join two or more array and retutrn result.

// const newArray =["tea","coffe","coldrink","water","milk"];
// newArray.sort();
// const position =newArray.indexOf("tea");//find index of element
// const slice1 = newArray.slice(1);//slice the array elemets 
// // console.log(newArray);
// // console.log(position);
// console.log(slice1);
// const splice1 = newArray.splice(0,4);//it gives the elemens from starting index(n-1) it excludes end index
// console.log(splice1);

//MUltidimesional array

// let student =[['sundar,20'],['jack',30],['rahul',30]];
// //accesssing elemets 
// // console.log(student[0]);//sundar 20
// // console.log(student[1][1]);//30

// student.push(['peter',80]);//adding elemnent
// student[1][2]='heloo';//addimg element using index
// student[1].push('bye');//aadding elemnt using push method
// student.pop();
// student.splice(1,0,(['jack',30]));
// console.log(student);


