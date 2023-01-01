let t=document.body.firstElementChild.firstElementChild
console.log(t) //table.table
console.log(t.rows)  // HTMLCollection(4) [tr, tr, tr, tr]
console.log(t.caption) // caption
console.log(t.tHead)  // thead tag show
console.log(t.tFoot)  //null
console.log(t.tHead.firstElementChild)  //tr

console.log(t.tBodies)  //HTMLCollection [tbody]

console.log(t.rows[1].rowIndex)