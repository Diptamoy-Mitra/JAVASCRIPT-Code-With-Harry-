let p= new Promise((resolve, reject)=>{
  console.log("Promise is pending.........")
  setTimeout(() => {
      //  console.log("I am a promise and i am a fulfilled")
      //  resolve(true)
      console.log("I am a promise and i am a rejected")
      reject(new Error("I am an error"))
  }, 5000);
})

console.log(p)