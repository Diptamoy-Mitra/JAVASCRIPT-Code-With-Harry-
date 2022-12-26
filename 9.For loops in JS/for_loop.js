

//for loop


//program to add 1st n natural no
const PromptSync = require("prompt-sync");
const prompt = PromptSync()
let sum = 0
let ss = PromptSync
let n = prompt("Enter n: ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    // console.log(i+1)
    sum += i + 1;

}
console.log("sum of first " + n + " natural no is: " + sum)
