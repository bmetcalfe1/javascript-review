var  age = 31; // semicolon at end of statement
//      ^ ^ white space is good 
// makes code readable

var name = "Ziad";


var num = 10;

if (num > 0) { //always have curly brackets even if just one statement
  console.log('num is greater than zero!!!');
  console.log('good job!!!');
}

// Functions


/*
Multiline comment
These 3 ways of writing functions are not the exact same. Use the first one.
*/

function doSomething(sentence) {
  // ...code goes here
  // ziad recommends this one for now
}

var doSomething = function(sentence) {
  
}

var doSomething = function doSomething(sentence){
  
}

