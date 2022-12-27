// Map method //use to create new array // also can modify values

let arr=[45,23,21]
let a=arr.map((value)=>{
    console.log(value)  //45 23 21
})
console.log(a) //return new array
console.log(arr) //[ 45, 23, 21 ]

//value index array
 a=arr.map((value,index, array)=>{
    console.log(value, index, array)  
})
