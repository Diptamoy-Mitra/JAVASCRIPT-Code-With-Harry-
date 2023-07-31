//promises in Javascript

// In JS , a promise is an object that represents the eventual completion or failure of an asynchronous operation, there are 3 states of a promise pending, fulfilled, rejected. A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// function getCheese(){
//   setTimeout(() => {
//       const cheese = "🧀";
//       return cheese;
//   }, 2000);
// }


const ticket = new Promise((resolve, reject) => {
  const isBoarded = false;
  if (isBoarded) {
    resolve("You not in flight " );
  }
  else {
    reject("your flight cancelled ")
  }
})

ticket
  .then((data) => {
    console.log('====================================');
    console.log('whooo', data);
    console.log('====================================');
  }).catch((data) => {
    console.log('====================================');
    console.log('oh no',data);
    console.log('====================================');
  }).finally((data)=>{
    console.log('====================================');
    console.log('I will also finally keyword');
    console.log('====================================');
  })