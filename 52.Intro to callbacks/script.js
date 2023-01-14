const PromptSync = require("prompt-sync");

let prompt=PromptSync()

//synchronus program
let a=prompt("What is ur name? ")
let b=prompt("What is ur age? ")
let c=prompt("What is ur fav color? ")
console.log(a+ " is "+b+" years old and has "+c+" favourite color." )
//output

// What is ur name? dipto
// What is ur age? 45
// What is ur fav color? red
// dipto is 45 years old and has red favourite color.



//asynchronus programming
console.log("Start")
setTimeout(function(){
  console.log("Hey i am good")
},3000)
console.log("end")
//output

// Start
// end  
// Hey i am good