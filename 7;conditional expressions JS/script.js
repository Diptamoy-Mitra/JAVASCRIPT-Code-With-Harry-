// conditional expressions

let a=prompt("Hey whats your age ?")
a=Number.parseInt(a)
// console.log(typeof a)
if(a<0){
    alert("This is an invalid age")
}
else if(a<9){
    alert("you are a kid and you cann't think of driving ")
}
else if(a<18 && a>=9){
    alert("You can think of driving after 18")
}
else{
    alert("This is an valid age")
}

console.log("Done")

console.log("You can ", a<18? "not drive":"drive")