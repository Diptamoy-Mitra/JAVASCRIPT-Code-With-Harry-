const PromptSync = require("prompt-sync");
let prompt=PromptSync()
let n=prompt("enter value: ")
n=Number.parseInt(n)
let i=0;
do {
    console.log(i)
    i++
} while (i<n);