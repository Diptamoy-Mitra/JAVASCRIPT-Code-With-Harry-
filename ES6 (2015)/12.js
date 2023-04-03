// SET method

// const uniqueNumbers=new Set();
// uniqueNumbers.add(3);
// uniqueNumbers.add(4)
// uniqueNumbers.add(3)
// console.log(uniqueNumbers)// Set(2) {3, 4}
// console.log(uniqueNumbers.size) //2
// console.log(uniqueNumbers.has(4))  //true 


const numbers=[4,5,6,4,5]
const uniqueNumbers=new Set(numbers)
console.log(uniqueNumbers) //Set(3) {4, 5, 6}
console.log(Array.from(uniqueNumbers))  //(3) [4, 5, 6]