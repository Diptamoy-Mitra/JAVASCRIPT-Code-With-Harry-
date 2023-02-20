let p1= new Promise((resolve, reject)=>{
  console.log("Promise is pending 1.........")
  setTimeout(() => {
       console.log("I am a promise and i am a fulfilled")
       resolve(true)
      
  }, 5000);
})




let p2= new Promise((resolve, reject)=>{
  console.log("Promise is pending 2.........")
  setTimeout(() => {
     
      console.log("I am a promise and i am a rejected")
      reject(new Error("I am an error"))
      // resolve(true)
  }, 5000);
})

console.log(p1,p2) 



//to get the value
p1.then((value)=>{
  console.log(value)  //true
})
//to catch the error
// p2.catch((error)=>{
//   console.log("Some error occur at p2")
// })

//output 
// Promise is pending.........
// script1.js:10 Promise is pending.........
// script1.js:18 Promise {<pending>} Promise {<pending>}
// script1.js:4 I am a promise and i am a fulfilled
// script1.js:24 true
// script1.js:13 I am a promise and i am a rejected
// script1.js:30 Some error occur at p2
//p2

p2.then((value)=>{
  console.log("hi......"+value)
},(error)=>{
  console.log(error)
})