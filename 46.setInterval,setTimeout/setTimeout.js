// const PromptSync = require("prompt-sync");
// let prompt = PromptSync()
document.write("Hello")


const sum=(a,b)=>{
  console.log("hey i am running",a+b)
}


let a = setTimeout(function () {
  alert("I am inside setTimeout")
}, 5000)
// clearTimeout(a)  //for off setTimeout execution 
// let b = prompt("Do you want to run setTimeout")
// if ("n" === b) {
//   clearTimeout(a)
// }
    // console.log(a)  //1

    setTimeout (sum, 1000, 1,2)