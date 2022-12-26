//array methods 

// tostring method
let n=[1,2,3,34,4]
console.log(n)
console.log(typeof n) //object
let b=n.toString()  //b now a string
console.log(b)  //1,2,3,34,4
console.log(typeof b)  //string

//join method 
let c=n.join("_")
console.log(c)  //1_2_3_34_4
console.log(typeof n, typeof c)  //object string

//pop method (change same array, not return different array)
let r=n.pop(); 
console.log(r) //4
console.log(n) //[ 1, 2, 3, 34 ]


//push method 
r=n.push(6)  //push return new array length in r
console.log(r)
console.log(n)  //[ 1, 2, 3, 34, 6 

//shift method(remove first element and return it) (modify original array)
r=n.shift()
console.log(r)
console.log(n) //[ 2, 3, 34, 6 ]

//unshift method
r=n.unshift(77)
console.log(r) //return new array length in r
console.log(n) //[ 77, 2, 3, 34, 6 ]