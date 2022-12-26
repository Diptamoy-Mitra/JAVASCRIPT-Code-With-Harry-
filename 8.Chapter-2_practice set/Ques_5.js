//print "you can drive" or " you can't drive" based on age being greater than 18 using JS
const ps=require('prompt-sync')
const prompt=ps()
let age=prompt("enter age: ")
age=Number.parseInt(age)
let a= age> 18? "can drive": "can't drive"
console.log(a)