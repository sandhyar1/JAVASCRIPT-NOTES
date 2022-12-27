console.log("map in js");

//maps in javascript(es6)
//we can use any type of any key,value pairs
const myMap = new Map();
//console.log(myMap);

const key1 = "mystr",
  key2 = {},
  key3 = function () {};
//setting map values
myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank object");
myMap.set(key3, "this is a function");
//console.log(myMap);

//getting the values from the map
let values1 = myMap.get(key1);
//console.log(values1);

//get the size of th map
//console.log(myMap.size());

//you can loop using for.of to get keys and values
for (let [key, values] of myMap) {
  //console.log(key, values);
}

//get only keys
for(let key of myMap.keys()) {
    //console.log('key is',key);
}
//get only values
for(let values of myMap.keys()) {
    //console.log('values is',values);
}
//you can loop through a map using for each loop
myMap.forEach((values,key)=>{
    //console.log('key is',key);
    //console.log('values is',values);
})
//converting map to an arrays
let myArray =Array.from(myMap);
//console.log('map to array is ',myArray);

//converting map keys to an array
let mykeysArray =Array.from(myMap);
//console.log('map to array is ',mykeysArray);

//converting map  values to an arrays
let myvaluesArray =Array.from(myMap);
console.log('map to array is ',myvaluesArray);






