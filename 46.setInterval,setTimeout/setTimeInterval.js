// setInterval(function(){
//   alert("RUN")
// },3000)    //run continuously after 3 sec


const sum=(a,b)=>{
  console.log("Sum is: ",a+b)
}
let c=setInterval(sum,2000, 1,4);

// clearInterval(c)