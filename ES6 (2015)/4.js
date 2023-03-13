// Enhanced Object literals 


//computed property keys
const keyName="name"
// const product={
//   [keyName]:"Mobile",
//   price: 100,
// }
// console.log(product)




//method defination shorthand
// const product={
//   buy: function(){
//     console.log('Bought')
//   },
// }
// product.buy()

//optimezed this
// const product={
//   buy(){
//     console.log('Bought optimized')
//   },
// }
// product.buy()



//property shorthand
const acessToken='dedenwjcenhjcbehcb';
const refreshToken='dwewbchb';
// const user={
//   acessToken: acessToken,    //key value same so es6 optimed it
//   refreshToken: refreshToken,
// };
// console.log(user)  //{acessToken: 'dedenwjcenhjcbehcb', refreshToken: 'dwewbchb'}

//optimization code if key and value name same
const user={
   acessToken,   
   refreshToken,
};
console.log(user) //same output as previous