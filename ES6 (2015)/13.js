// MAP (HASHTables)  //it maintain order according to input

const urls=new Map();
console.log(urls) //Map(0) {size: 0}

urls.set('development', 'dev.example.com')
// console.log(urls) //Map(1) {'development' => 'dev.example.com'}

urls.set('Production','dev.prod.example.com')
// console.log(urls.get('development'))  //dev.example.com


//object is kind of map but has many problems
// const urlObj={
//   development: 'dev.example.com',
//   Production:'dev.prod.example.com'
// }
// console.log(urlObj.Production)  //dev.prod.example.com 



//itearate map using for of loop
for (const a of urls) {
  console.log(a)    

  //output
//   (2) ['development', 'dev.example.com']
// 13.js:21 (2) ['Production', 'dev.prod.example.com']
}