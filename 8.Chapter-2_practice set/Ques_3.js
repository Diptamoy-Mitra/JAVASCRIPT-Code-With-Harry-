// write a JS program to find whether the no divisible by 2 and 3

let num=prompt("Enter Num: ")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Matched")

}
else{
    console.log("Not matched")
}