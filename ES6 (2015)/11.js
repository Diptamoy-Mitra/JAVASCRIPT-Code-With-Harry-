// find array method

const users=[{name:'Rakesh'},{name:'John'}]

const a=users.find((user)=>{    //run 2 times
  return user.name==='Rakesh';
})
console.log(a)  //{name: 'Rakesh'}

const b=users.findIndex((user)=>{
  return  user.name==='John'
})
console.log('Index: '+b);  //1