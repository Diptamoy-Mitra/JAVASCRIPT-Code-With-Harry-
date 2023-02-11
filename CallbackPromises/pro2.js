

/*


1. Register
2. Send welcome email
3. login
4. get user data
5. display user data



*/

function waitForThreeSeconds() {
  let ms = 3000 + new Date().getTime()
  while (new Date() < ms) { }
}


function register(callback) {
  // waitForThreeSeconds();

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Register done......")
      // callback();
      resolve("Hiiii ")
      // return reject(" Error while registering")
    }, 1000)
  })
  

}

function sendEmail() {
  // waitForThreeSeconds()


  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("send email done & end......")
      // callback()
      resolve();
    }, 5000)
  })
  

}

function login() {
  // waitForThreeSeconds()return new Promise((resolve,reject)={
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("login  end......")
        // callback()
        resolve();
      }, 3000)
    })

}

function getUserData() {
  // waitForThreeSeconds()

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("get user data done...")
      // callback()
      resolve()
    }, 1000)
  })
  

}

function displayUserData() {
  // waitForThreeSeconds()
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("user data displayed....")
      // callback()
      resolve()
      // reject("new error")
    }, 1000)
  })
 

}


//call back hell
// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });

//promises

/* other application work
promises.js:27 Register done......
promises.js:48 login  end......
promises.js:39 send email done & end...... */
register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
  console.log("This  is"+err)
})


// });


console.log('other application work')


