//Arrow function

//Normal function
// function greet(){
//   console.log('Hello World')
// }

// greet();


//arrow function
const greet=(count)=>{
  for(let i=0;i<count;i++)
    console.log('Hello World');  //6  Hello World
}
greet(6);


const square=(num)=>num*num;
console.log(square(5)); //25