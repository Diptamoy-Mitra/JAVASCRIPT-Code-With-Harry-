//getting and setting attributes of elements


let coderDostLink=document.querySelector('a')
console.log(coderDostLink)  //<a href="http://youtube.com/@coderdost">coder dost channel</a>
console.log(coderDostLink.getAttribute('href')) // http://youtube.com/@coderdost


//set the attribute
coderDostLink.setAttribute('href',"https://www.youtube.com")
console.log(coderDostLink.getAttribute('href')) //https://www.youtube.com
// coderDostLink.innerText="Master class of react js"