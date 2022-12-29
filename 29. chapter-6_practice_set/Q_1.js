// WAP using prompt function to take input of age as a value from the user and use alert to tell him if he can drive   

const PromptSync = require("prompt-sync");
let prompt=PromptSync()   


let age=prompt("enter your number: ")
age=Number.parseInt(age)

const canDrive=(e)=>{
    if(e<18){
        return false;
    }
    else{
        return true;
    }
}

if(canDrive(age)){
    alert("Yes you can drive")

}
else{
    alert("can't drive")
}