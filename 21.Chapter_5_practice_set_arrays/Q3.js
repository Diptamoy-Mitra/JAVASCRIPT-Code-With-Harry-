//filter for number divisible by 10 from given array

let arr=[1,2,3,4,70,80,50,330]
let arrNew=arr.filter((x=>{
    return x%10==0
}))

console.log(arrNew)