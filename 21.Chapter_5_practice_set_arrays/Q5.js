//use reduce function to calculate factorial of a given number from an array of first n natural number 

let arr=[1,2,3,4]
let n=arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)