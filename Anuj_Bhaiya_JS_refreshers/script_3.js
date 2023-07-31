//Array methods for call back functions

const a=[4,1,6,-2,-5,3,2,-8,6,7]



// const firstNeg=(num)=>{
//   return num<0;
// }
// let res1=a.find(firstNeg)
// console.log(res1) //-2

// res1=a.findIndex(firstNeg);
// console.log(res1) //3



a.forEach((num, i)=>{
  console.log('array num',num, i); 
})