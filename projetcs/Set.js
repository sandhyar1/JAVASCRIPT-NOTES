console.log("set in javacript");

//set stores unique values
const  mySet = new Set();//intialize an empty set
//console.log(mySet);


//adding values to this set
//it takes distinct values in the set
mySet.add('this');
mySet.add('Myname');
mySet.add('sandhya');
mySet.add(1);
mySet.add(true);
//console.log(mySet);

//by making constructor
// let mySet1 = new Set([1,45,'this',false,{a:4,b:5}]);
// console.log('new set:',mySet1);

//get the size
console.log(mySet.size);
//check whether there is any value or not
console.log(mySet.has(1));


console.log('before removing',mySet.has('this'));
mySet.delete('this');//remove an element from the set
console.log('after removing',mySet.has('this'));

//iterate the set
// for(let item of mySet){
//     console.log('item is',item);
// }

mySet.forEach ((item) =>{
    console.log('item is',item);
})

mySet =Array.from(mySet);
console.log('map to array is ',mySet);
