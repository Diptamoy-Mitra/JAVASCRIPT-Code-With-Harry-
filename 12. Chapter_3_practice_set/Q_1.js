//write a program to print the marks of a student in an object using for loop

//obj ={harry:98, rohan:90, kaberi: 68}

let marks={
    harry:90,
    Shubam: 89,
    lovish:45,
    Monika:43
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+" "+Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
} 