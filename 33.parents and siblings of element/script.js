//head and body are siblings, both children of html

console.log(document.body.firstChild) // #text
a = document.body.firstChild
console.log(a.parentNode) //body
console.log(a.parentElement) //body
console.log(a.firstChild.nextSibling) //null