console.log("JS tut 3 var,let and const")
// var a=45
// var b="Harry"   //can re-declare and re-initialized
// var c=null
// var d=undefined
let b="Harry"
let c=null
let d=undefined
const author="Dipto"
// let author="dip"  //throws an error because constant cannot change
{
    // var b='this'
   let b='this'    //block level scope can't re-declare
    console.log(b)
}

console.log(b)