// in ques 1 use confirm to ask the user if he want to see the prompt again 

const PromptSync = require("prompt-sync");
let prompt = PromptSync()




let runAgain;
const canDrive = (e) => {
    if (e < 18) {
        return false;
    }
    else {
        return true;
    }
}
while (runAgain) {

    let age = prompt("enter your number: ")
    age = Number.parseInt(age)
    
    if (canDrive(age)) {
        alert("Yes you can drive")

    }
    else {
        alert("can't drive")
    }
    runAgain = confirm("Do you want to run again")
}
