// String
//split()method used to split the string into an array of substrings based on specified breakpoints.
var  string ="hello world,holla";
//string breakpoint
var  breakpoint = " ";  //a space breakpoint
var splitted = string.split(breakpoint);
//["hello"."world","holla"]

//breakpoint arguement can be string or a regrex

//regrex breakpoint
//regrex matches the point characters  e and o
/*const  breakpoint =/e|/o;
const splitted = string.split(breakpoint);
//['h','ll','w','rld',]

//replace()method  used to replace substring ina string with new string.
//it take search value which can be string or regrex and replace the matches with the reapalce value;
const string  = "hello world";
const searchvalue="hello";
var  replacevalue="hola";
var replaced = string.replace(searchevalue, replacevalue);
//for regrex
const  serachvalue =/e|/g;
const replacevalue="--";
const replaced = string.replace( searchevalue, replacevalue);

//includes() checks if substring can be found ina string/
//substring() cut out the substring from an entire string;
//char at() is used to retrieve the character at a specified position.

const  string ="hello world"
const check1= string.includes("llo");
const check2 = string.includes("llo",4);//position argument specifies the point from which method should start checking
const sub1 =string.substring(5);
const sub2 =string.substring(5,8);//return value this string is the sliced out substring dependimg on the specified start and end position
const char0 = string.charAt();
const char = string.charAt(6);*/







