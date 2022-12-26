let marks_class_12=[1,2,3,4, null, false, "Not Present"]  //array is object
console.log(typeof marks_class_12)
console.log(marks_class_12)

console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[7])  //print undefined

console.log(marks_class_12.length)  //length of array 

//add values in arrays
marks_class_12[7]=56  
console.log(marks_class_12)

//change elements
marks_class_12[0]=11
console.log(marks_class_12)


//quick quiz (iterate array)
console.log("QUICK QUIZ")
for (const iterator of marks_class_12) {
    console.log(iterator)
}