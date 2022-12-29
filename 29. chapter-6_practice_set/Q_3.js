//In the previous question , use console.error to log the error if the age entered is negetive 

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
    if(age<0){
        console.error("please enter a valid age")
        break;
    }
    if (canDrive(age)) {
        alert("Yes you can drive")

    }
    else {
        alert("can't drive")
    }
    runAgain = confirm("Do you want to run again")
}