console.log("destructuring in javasript");

let a,b;
[a,b]=[34,64];
//console.log(a,b);

//[a,b,c,...d] =[1,2,3,4,5,6,7,8,9]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//array destructring
// ({a,b,c,...d} = {a:34 , b:67 ,c:45, d:78})
// //console.log(a, b, c, d);

// const fruits =['apple','banana','grapes','strawberry'];
// [a,b,c,d] =fruits;
// console.log(fruits);

//object destrcturing
const laptop={
    model: "hp pavallion",
    age:"23",
    gender:"male",
    net:  1233,
    start:function(){console.log('start');}
}
const (model,age,gender) =laptop;
console.log(model,age,gender);