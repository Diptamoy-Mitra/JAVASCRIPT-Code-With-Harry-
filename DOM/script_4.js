//updating and changing content



//innertext
// let heading=document.querySelector('h1')
// console.log(heading.innerText) //welcome to coder dost family (1)

//innerHTML //doesn't ignore spaces
// console.log(heading.innerHTML) // welcome to  coder dost family(1)


let content=document.querySelector('.content')

//retrieve and set content in plain text
console.log(content.innerText);  //Hello coders

////retrieve and set content in html formate
console.log(content.innerHTML)  // <p>Hello coders</p>




//modify
content.innerText="<p> great coders </p>"
console.log(content.innerText); //<p> great coders </p>

content.innerHTML= "<p>great second coders</p>"
console.log(content.innerHTML) //<p>great second coders</p>



