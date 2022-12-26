// funcions

let a=1
let b=2
let c=3

// console.log("Average of a and b is : ", 1+(a+b)/2)
// console.log("done")
// console.log("Average of c and b is : ", 1+(c+b)/2)
// console.log("done")
// console.log("Average of a and c is : ", 1+(a+c)/2)
// console.log("done")

function onePlusAvg(x, y){
    console.log("Done")
    return Math.round(1+(x+y)/2);
}
console.log("Average of a and b is : ", onePlusAvg(a,b))
console.log("Average of c and b is : ", onePlusAvg(c,b))
console.log("Average of c and a is : ", onePlusAvg(c,a))

const sum=(p,q)=>{
    return p+q
}

console.log(sum(9,7))

const hello=()=>{
    console.log("Hi");
}
hello()