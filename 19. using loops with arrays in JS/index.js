//classical for loops
let num = [3, 54, 1, 2, 4]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]) //3,54,1,2,4

}

//for each loop
num.forEach((element)=>{
    console.log(element*element)  //9,2916,1,4,16 
})


//Array  form  (use to create an array from any other object)
//  document.getElementsByClassName("Sidebar_section_IVz3_sidebar_list")  //return HTML collection
//  let a=document.getElementsByClassName("Sidebar_section_IVz3_sidebar_list") 
//  console.log(typeof a) //object
//  a.forEach() //error
//  Array.from(a) //convert html collection  to  array


 //another example of Array.from
 let name="Harry"
 let arr=Array.from(name)  //convert string to array
 console.log(arr)  //[ 'H', 'a', 'r', 'r', 'y' ]


 //for of loop
 for(let i of arr){
    console.log(i)  //H a r r y
    
 }
 //for in loop

 for (const key in arr) {
    console.log(key,"-",arr[key])  //0 1 2 3 4  //return key index of array  //for print value use arr[key]
 }

 


