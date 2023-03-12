//Arrow functions


//normal function
// function greet(){
//   console.log("Hello")
// }

//using arrow function
// const greet=(a,b)=>{
//   console.log('good morning :'+(a+b))
// }
// greet(9,7)

// console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const shop={
//   purchase: ()=>{
//     console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//   },
// };

// shop.purchase()





//example of this and its problem without arrow function
const myButton=document.querySelector('#myButton')
// const shop={
//   price: 100,
//   buy: function(){
//     myButton.addEventListener('click',function(){
//       console.log(this)    // <button id="myButton">Click me</button>
//       console.log('I spent '+this.price)   //I spent undefined
//     })
//   }   
// };

// shop.buy()

//we can solve this without arrow function assee
// const shop={
//   price: 100,
//   buy: function(){
//     const self=this;
//     myButton.addEventListener('click',function(){
//       console.log(this)    // <button id="myButton">Click me</button>
//       console.log('I spent '+self.price)   //I spent 100
//     })
//   }   
// };

// shop.buy()


//with arrow function we can solve this

const shop={
  price: 100,
  buy: function(){
    myButton.addEventListener('click',()=>{
      console.log(this)    // {price: 100, buy: ƒ}   //parent wala object ka this ho jaiga
      console.log('I spent '+this.price)   //I spent 100
    })
  }   
};
shop.buy()