

// create a array of numbers and take input from the user to add numbers to this array
const PromptSync = require("prompt-sync")
let prompt=PromptSync()
let arr=[1,2,3,4,5]
console.log("Before push: ",arr)
let a=prompt("Enter values: ")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)