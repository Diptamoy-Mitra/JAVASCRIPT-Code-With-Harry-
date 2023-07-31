//call back function
// its a function passed as an argument to another function

const calculate=(a,b,operation)=>{
  return operation(a,b);
}

//method 1
const res1=calculate(2,4, function (a,b) {
  return a+b ;
})
console.log(res1);  //6


//method 2
const sub=(a,b)=>a-b;
const res2=calculate(3,1,sub);
console.log(res2); //2

//method 3
function multiply(a,b){
  return a*b;
}
const res3=calculate(2,3,multiply);
console.log(res3)  //6
