const PromptSync = require("prompt-sync");

// w.A.P to print "try again" untill the user enters the correct numbers
let prompt=PromptSync()
let cn=4
let i;
while(i!=cn){
    i=prompt("Enter no: ")
    console.log("try again")
}
console.log("You enter correct number")