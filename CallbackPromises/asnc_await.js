

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

  return new Promise((resolve, reject) => {
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


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("error while sending email")
      console.log("send email done & end......")
      // callback()
      resolve();

    }, 5000)
  })


}

function login() {
  // waitForThreeSeconds()return new Promise((resolve,reject)={
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login  end......")
      // callback()
      resolve();
    }, 3000)
  })

}

function getUserData() {
  // waitForThreeSeconds()

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get user data done...")
      // callback()
      resolve()
    }, 1000)
  })


}

function displayUserData() {
  // waitForThreeSeconds()
  return new Promise((resolve, reject) => {
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
// register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
//   console.log("This  is"+err)
// })




// });


//async await
//simple and readible
async function authenticate() {
  try {
    const mesage = await register()
    await sendEmail()
    await login()
    await getUserData()
    await displayUserData()

    console.log(mesage)

  } catch (error) {
    console.log(error)
    throw new Error();   //manually throw error
  }

}
authenticate().then(() => {
  console.log("All set")
}).catch((err) => {
  console.log("eroor present" + err)
})
console.log('other application work')


