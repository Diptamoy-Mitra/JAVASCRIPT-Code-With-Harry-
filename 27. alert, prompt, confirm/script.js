alert("hello your script work , enter value of a: ")
let a=prompt("enter a: ", "6")
a=Number.parseInt(a)
alert("you entered type of a: "+ typeof a)

let write=confirm("Do u want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}