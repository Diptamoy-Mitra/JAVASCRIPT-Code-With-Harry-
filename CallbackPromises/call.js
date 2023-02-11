

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
  setTimeout(() => {
    console.log("Register done......")
    callback();
  }, 1000)

}

function sendEmail(callback) {
  // waitForThreeSeconds()
  setTimeout(() => {
    console.log("send email done......")
    callback()
  }, 1000)

}

function login(callback) {
  // waitForThreeSeconds()
  setTimeout(() => {
    console.log("login  end......")
    callback()
  }, 1000)

}

function getUserData(callback) {
  // waitForThreeSeconds()
  setTimeout(() => {
    console.log("get user data done...")
    callback()
  }, 1000)

}

function displayUserData(callback) {
  // waitForThreeSeconds()
  setTimeout(() => {
    console.log("user data displayed....")
    callback()
  }, 1000)

}


//call back hell
register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });



});


console.log('other application work')


