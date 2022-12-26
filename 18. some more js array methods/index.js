
//delete methods
let num=[1,2,3,4,5,6,7,8,9]
console.log(num.length) //9
console.log(num[0]) //1
delete num[0]
// console.log(num) //[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ] 
console.log(num.length) //9  //so array length doesn't change ,but value delete

//concat methods(doesn't change main array)
let num_more=[11,12,13,14,15,16,17,18,19]
let newArray=num.concat.apply(num_more)
console.log(newArray)  // [ 11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more=[211,212,213,214,415,416,417,418,419]
let n=num.concat(num_more, num_even_more) 
console.log(n)
//output 
// [
//     <1 empty item>, 2,   3,
//     4,              5,   6,
//     7,              8,   9,
//     11,             12,  13,
//     14,             15,  16,
//     17,             18,  19,
//     211,            212, 213,
//     214,            415, 416,
//     417,            418, 419
//   ]
                

//sort method(alphabetically sort) (modify original array)  (very important)
let x=[551,22,3,14,5,6,7,8,229]
x.sort()
console.log(x)  //14, 22, 229, 3, 5, 551,  6,   7, 8  

//then how sort correctly? this is the method
let compare=(a,b)=>{
    return a-b      //sort ascending order
}
x=[551,22,3,14,5,6,7,8,229]
x.sort(compare)
console.log(x)  //3,  5,   6,   7, 8,14, 22, 229, 551
 

//reverse method() (modify main array)
console.log(x)  //3,  5,   6,   7, 8,14, 22, 229, 551
x.reverse()
console.log(x);  // 551, 229, 22, 14, 8,7,   6,  5,  3

//splice  method() (use to add items in array)  //splice(start, no_of_elements, new elemnts) // modify main array
let delete_values=x.splice(2,3 ,1021,1022,1023)
console.log(x)   // 551, 229, 1021, 1022, 1023,   7,    6,    5, 3
console.log(delete_values) //[ 22, 14, 8 ]

//slice method (slice out a piece from an array, it creates new array ) (not modify main array)
x=[1,2,3,4,5,6,7,8,9] 
let newNum=x.slice(0,2)
console.log(newNum) //  3, 4, 5, 6,7, 8, 9

