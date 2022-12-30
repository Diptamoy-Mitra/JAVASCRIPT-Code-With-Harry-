console.log(document.body.firstChild) // chupa hua text ayegi

console.log(document.body.lastChild)  //<script src="script.js"></script>

console.log(document.body.childNodes)  //HTML collections   //NodeList(4) [text, div, text, script]
let arr=Array.from(document.body.childNodes)
console.log(arr) //(4) [text, div, text, script]

//iterate arr
// for (const iterator of arr) {
//     console.log(iterator)
// }
console.log(document.hasChildNodes())  //true 
