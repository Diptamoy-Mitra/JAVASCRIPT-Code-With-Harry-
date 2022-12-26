let name="Harry"
//length of string
console.log(name.length)
//touppercase() and toLowercase() method
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//slice  method
console.log(name.slice(2,4))  
console.log(name.slice(2))  

//replace method
console.log(name.replace("Har", "Per"))

//concat method
let friend="Naman"
console.log(name.concat(" is a friend of ", friend ," OK"))

//trim method
let friend2="    Mina    "
console.log(friend2)
console.log(friend2.trim())   //remove all spaces  

//strings are immutable
let fr="shiksha"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]="yu"   //not change the string 
console.log(fr[4])
console.log(fr[5])
console.log(fr[6])

//quick quiz
let x="Dipto"
for (const iterator of x) {
    console.log(iterator)
}



