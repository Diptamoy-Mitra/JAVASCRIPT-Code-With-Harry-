// to find whether no is divisible by either 2 or 3

let num=prompt("Enter Num: ")
num=Number.parseInt(num)
if(num%2==0 || num%3==0){
    console.log("Matched")

}
else{
    console.log("Not matched")
}