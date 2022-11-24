// What happens when you run a javasript program?(Js engine)
// Execution context created


/************************************************** */
// var n=2;
// function square (num){
//     var ans= num*num;
//     return ans;
// }
// var square2 =square(n);

// //run behined the scenec
// A global excution context is created
// 2 componets there memory and code 
// These copinents created ij two phases

// 1. creation phase(Mmemory creation phase)
// it will allocate memory to variable,functions .

// alloacate mempry to (n)it will reserve a memory space in memory 
//  now got to the second line 
//  now allocate memory to square()
//  when it allocates memory to n it sotres value -undefined
//  when stores a function -it stores whole codee in function
//  now it allocates to memory square2
//  now it stores for all the varibles unfdefined.

//2.Code Exceution Phase
//it runs through line by line.
// when it encounters to line var n=2; it placed to now  n =2;
// now in line 2 there is nothing to exceutec

// now to line 6 function invocation square()
// Now again bran new Exceution context is created.

// Now again this has 2 comcponents.
// now in the memory careation phase.

// phase1:now allocate memory to num and ans here.we will store in the variable is undefined.
// phase2:when this function is invoked where n is passed to num 2 is passed
// Argument :n is arguement in function
// Parameter:num is paramenter of function
// line no 3 now code execute is num*num undefined is replaced by the 2 then it take place in memory now ans=4
// now in line 4 return lkeyword is return the control of the program wherethe function was invoked 
// return the value the control was to lone no.6
// it finds the value in memory in local memory.
// now returns the value 4
// go to the global excution replace the square(2)  function with 4
//now when the gloabl function take the comtron the whole excecution of the context is deleted.
 



/****************************************************** */
//it is very difficult to excitutiomn context now it is very difficult to mange.
//here the CALL STACK comes in to the picture js has its own call stack.

// //CALL STACK
// it is the stack in the stack first is GEC(whenever any JS program is run the CS  is populated with the GEC)
// (whwnever the function is invoked or nay new js context is execited)
// now the exceution context is put inside the stack(E1);
// now the whole function is excuted and return the control iver the porogram 
// then the E1 pop from the stack.now control goes back to the GEC.
// //call stack for the managing the EX context
//When the whole code is exceuted now the GEC is pop out of the stack.


//This is how the whole code in js excuted

/******************************************************* */
// CALL stack maintains order of execution context
// CAll stack also known as:
// 1.Exceution context stack
// 2.Program stack
// 3.Control stack
// 4.Runtime stack
// 5.Machine stack