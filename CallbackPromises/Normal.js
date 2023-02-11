

/*


1. Register
2. Send welcome email
3. login
4. get user data
5. display user data



*/

function waitForThreeSeconds(){
  let ms=3000+new Date().getTime()
  while(new Date()<ms){}
}


function register(){
  // waitForThreeSeconds();
  setTimeout(()=>{
    console.log("Register done......")
  },2000)
  
}

function sendEmail(){
  // waitForThreeSeconds()
  setTimeout(()=>{
    console.log("send email done......")
  },1000)
  
}

function login(){
  // waitForThreeSeconds()
  setTimeout(()=>{
    console.log("login  end......")
  },2000)
  
}

function getUserData(){
  // waitForThreeSeconds()
  setTimeout(()=>{
    console.log("get user data done......")
  },1000)
  
}

function displayUserData(){
  // waitForThreeSeconds()
  setTimeout(()=>{
    console.log("user data displayed....")
  },2000)
 
}

register();
sendEmail();
login();
getUserData();
displayUserData();

console.log('other application work')


