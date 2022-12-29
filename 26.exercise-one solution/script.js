//write a js program to generate a random number and store it in a variable. the program then takes an input from the user 
//to tell them whether the guess was correct ,greater or lesser than the original no. .
//100- (no of guesses) is the score of user, number should be between 1-100

const PromptSync = require("prompt-sync");

let x;
let y;
x = Math.floor(Math.random() * 100 + 1);
let score = 0;
do {
    let prompt=PromptSync()
    y=prompt("Enter: ")
    if(x>y){
        console.log(`"x" is greater than ${y}`)
    }
    else if(x<y){
        console.log(`"x" is lesser than ${y}`)
    }
    else{
        console.log(`${x} is equal with ${y}`)
    }
    score+=1;
} while (x!=y);

console.log("No of guesses: ",score)
console.log("Point: ",100-score)