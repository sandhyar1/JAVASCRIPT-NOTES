console.log("fetch API");

//button with id myBtn
let myBtn = document.getElementById('myBtn');

//div with id content
let content = document.getElementById('myBtn');



// function getData(){
//     console.log("started getSta")
//     url="xhr.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text();

//     }).then((data) =>{
//         console.log("inside second then");
//         console.log(data);
//     })

// }

//get request with fetch api
// function getData(){
//     console.log("started getdata")
//         url="https://api.github.com/users";
//         fetch(url).then((response)=>{
//             console.log("inside first then")
//             return response.json();
    
//         }).then((data) =>{
//             console.log("inside second then");
//             console.log(data);
//         })
    
//     }


function postData(){
        url ="https://dummy.restapiexample.com/api/v1/create"
        data ='{"name":"test1","salary":"123","age":"23"}'
        params ={
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body: data
        }
         fetch(url, params).then(response => response.json())
        .then(data => console.log(data)
        )
}
postData()
// console.log("before  running get data");
// getData();
// console.log("after runnning  get data")