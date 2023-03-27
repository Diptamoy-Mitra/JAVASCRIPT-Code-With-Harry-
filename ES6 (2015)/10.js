// PROMISES 



//it is called callBack //it faces nesting problem and become complex
// function login(cb){
//   setTimeout(() => {
//     console.log('Login...........')
//     cb();
//   }, 0);
// }
// login(()=>{
//   console.log('Redirecting');    
//   // Login...........
//   // 10.js:12 Redirecting       

// });









//promises example


function login() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Login............')
      resolve();
      // reject();

    }, 100);
  })

}

login().then(()=>{
  console.log('Redirecting..')
}).catch((err)=>{
  console.log('Error..........')
})
