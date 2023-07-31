//get element by tag name  //thats old style
// let tagNameElement=document.getElementsByTagName('p')
// console.log(tagNameElement) //HTMLCollection(2) [p, p]
// tagNameElement.array.forEach(element => {
//   console.log(element)  //error 
// });


// new style we always use this now
// let resultElement=document.querySelectorAll('p')
// console.log(resultElement)  //NodeList(2) [p, p]  //no need to convert into array
// resultElement.forEach(e=>{
//   console.log(e)  //no error
// })


// let classNameElements=document.getElementsByClassName('coderdost');
// console.log(classNameElements) //HTMLCollection [h2.coderdost]



// let elementById=document.getElementById('coders')
// console.log(elementById) // <h3 id="coders">my passion us coding</h3>


