console.log("iterators");

//iterators
function fruitsIterators(values){
    let nextIndex = 0;
    //we will return object
    return {
        next:function() {
            if(nextIndex < values.length){
             //we will return this below object
            return  {
                value: values[nextIndex++],
                done: false
            }
        }
        else {
                //we will return this below object with only done
         return {
            done: true

               }
           }
        }
    }
}

const myArray =['Apples', 'Grapes','oranges','banana'];
console.log("my array is", myArray);

//using the iterators
const fruits =fruitsIterators(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

