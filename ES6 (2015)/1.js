//let const keyword



//var
var productName='Laptop'

//code polute
var age=18;
if(age >= 18){
  var driving=true; //create code polute because it accessible in outside the bloack
  let d=true;
}
// console.log(driving)
// console.log(a) //faced error(can't access)

//var function scope
//const,let block scope

function register(){
  var username='rakesh';
  var password='secret';

}

//output
//1.js:26 Uncaught ReferenceError: username is not defined
// at http://127.0.0.1:5500/ES6%20(2015)/1.js:26:13
// console.log(username)

// var product='laptop'
// var product='Mobile'
//overwrite here in var but in 'let' and 'const' not happen
// console.log(product)

//let
// let a='laptop'
// console.log(a)


//const 
const product='laptop'
// product='mobile'  //can't reassign 
// console.log(product)


//pehele use then declare
console.log(ag)  //undefined
var ag=20 
console.log(ag) //20


//faced error
// console.log(aa) //js:54 Uncaught ReferenceError: Cannot access 'aa' before initialization
// let aa=40


//const
const agee={
  years:19,
}
// agee=45  //faced error ,can't re assign
console.log(agee.years) //print 19