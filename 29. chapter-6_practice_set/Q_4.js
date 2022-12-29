// WAP to change the url to google (redirection) if user enters a number greater than 4

let num=prompt("Enter no: ")
num=Number.parseInt(num)

if(num>4){
    location.href="https://google.com"
}
else{
    alert("Not redirect")
}