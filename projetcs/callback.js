console.log("callback function");
//it is the function in the function by roll coll

//pretend that this response is coming from the server
const  students = [
    {name: "harry", subject: "javascript"},
  {name: "rohan", subject: "machine learning"}
]
//students.forEach()//function is syncronus


//function enroll 
function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();//getstudents() function in function
    },3000);
}
//function getStudents()
function getStudents(){
    setTimeout(function() {
        let str= "";
        students.forEach(function(student){
            str +=`<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML= str;
        console.log("student have been fetched");
       
    },1000);

}

let newStudent = {name:"sunny", subject:"springboot"}
enrollStudent(newStudent, getStudents);
// getStudents();