//spread operator  (array to object conversion)


let arr1=[3,5,8]
let obj1={...arr1}
console.log(obj1)  //{0: 3, 1: 5, 2: 8}

function sum(v1,v2,v3){
  return v1+v2+v3;
}

console.log(sum(...arr1)) //16

let obj2={
  name: "harry",
  company: "company xyz",
  address: "XYZ"
}
//overwrite in object
console.log({...obj2,name:"dip", company: "UYT"}) //{name: 'dip', company: 'UYT', address: 'XYZ'}