//change the card title to red

// let ctitle = document.getElementsByClassName('card-title')[0]
// ctitle.style.color = "red"

let x=document.getElementById("firstcardtitle")
x.style.color="blue"

let ctitles=document.querySelectorAll('.card-title')
console.log(ctitles)  //NodeList(3) [h5#firstcardtitle.card-title, h5#secondcardtitle.card-title, h5#thirdcardtitle.card-title]
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="orange"

document.querySelector('.this').style.color="cyan"


console.log(document.getElementsByTagName('a')) //HTMLCollection(10) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

console.log(document.querySelector('.card').getElementsByTagName('a')) //HTMLCollection [a.btn.btn-primary.this]


console.log(document.getElementsByName('search'))  //NodeList [input.form-control.me-2]