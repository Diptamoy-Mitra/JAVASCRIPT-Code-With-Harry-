let promise=new Promise(function(resolve, reject){
  alert("hello..............")
  resolve(56);
})

console.log("hello 1")  //1st print it
setTimeout(function(){
  console.log("Hello two in 2 sec.")  //4th print it
},2000)
console.log("My name is: "+ "hello 3"); //2nd print it
console.log(promise) //3rd print it



//fetch google.com homepage =>console.log("google.com, hompage done")
//fetch data from the data set
//fetch pictures  from the servers
//print downloading
//rest of the script
 
