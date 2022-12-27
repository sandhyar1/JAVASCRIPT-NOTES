console.log("async/await function");


async function harry(){//it will return a promise
console.log("inside calling harrry");
const response = await fetch("https:/api.github.com/users");
console.log("before response");
const users =await response.json();
console.log("users resolved");
return users;
}
console.log("before calling harry");
let a = harry();
console.log("after calling harry");
console.log(a);
a.then(data => console.log(data))
console.log("last line of the js file");
