console.log("Symbol in js");

//symbol---usage to get new primitive to get unique key
const sy1 = Symbol('this is identifier');
const sy2 = Symbol('this is identifier');
//console.log('Symbol is',sy1);
//console.log(' type of Symbol is',sy1);
//console.log(sy1 === sy2);

const a = "this is";
const b ="this is";

// console.log( a===b)
// console.log( null===null)
// console.log( undefined===undefined)


const k1 = symbol();
const k2 = symbol();

myObj ={};
myObj[k1] ="sandhya";
myObj[k2] ="rndhya";
myObj["name"]="goodboy"

// console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj[k2]);
// console.log(myObj.k2);//cannaot do this to get this because it is same as my myobj["k2"]

//symbols are ignoree in for in loop
for(key in myObj){
    console.log(key, myObj[key]);
}
