//keep adding number into the array 1  untill 0 is added in array 1

const PromptSync = require("prompt-sync")
let prompt = PromptSync()
let arr = [1, 2, 3, 4, 5]
console.log("Before push: ", arr)
let a;
do {
     a = prompt("Enter values: ")
    a = Number.parseInt(a)
    arr.push(a)

} while (a != 0);
console.log(arr)