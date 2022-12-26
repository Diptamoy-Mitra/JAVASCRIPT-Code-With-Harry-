//demonstrate the use of switch case statesments in JS

let age=prompt("enter age: ")
age=Number.parseInt(age)
switch (age) {
    case 12:
        console.log("Age: 12")
        break;
    case 13:
         console.log("Age: 13")
         break;

    default:
        console.log("Age is not special")
        break;
}