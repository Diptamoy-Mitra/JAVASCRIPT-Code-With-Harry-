// while loops
const PromptSync = require("prompt-sync");
let prompt=PromptSync()
let n=prompt("enter value: ")
n=Number.parseInt(n)
let i=0;
while(i<n){
    console.log(i)
    i++;
}