
//Destructuring

const user={
  name:'John Dee',
  age: 23,
};
// console.log(user.age)
// console.log(user.name) 


//use destructuring
// const {name,age }=user;
const {name:fullname, age}=user  //Elias method name er jaigay name  object property fullname hoi jabe
// console.log(fullname)
// console.log(age)


//Array destructuring
const data=['Rakesh', 30, 'Engineer', 'Data'];
const [name,agee,profession, value]=data;
// console.log(data[2])
console.log(profession)