console.log("promise vs callback");

// A promise is an object that amay produce a single value some time in future :
//either a resolved or reject it is used to handle muktiple aysncronus 
//callback are important for nayone using seerver based technilogy  to provide real time repirting.
//caalbacks make sure that a function running is going to run beforw a task is completed but wil run right after the task has completed.


console.log("setInterval");
//used to repeat a specified function at everygiven  time interval.it evaluates functions or expression at given intervals.
//it continues calling of function until the window is closed or the clearInterval
//method is called
//1.SettimeOut ()
//2.SEtime interval()

//setInterval set adelay functions that are executed again and again
//can cancel with clearInterval().if you wish to have afunction called after the specific delay/
//it sets the timer for the ececution of a caalback functio,calaling the function upon timer .

// setInterval(function,milliseconds);
// function-contaning block of Code
//millsecomds=the time interval
// function greet(){

//     console.log("hello world");
// }
// setInterval(greet,1000);

// function showTime(){
//     let dateTime = new Date();
//     let time = dateTime.toLocaleString();
//     console.log(time);
// }
// let display =setInterval(showTime,5000);

//it keep callin the specified function until cleariNterval() step to stop the interval.