let promise=new Promise(function(resole, reject){
  alert("hello")
  resolve(56)
})

console.log("hello 1")
setTimeout(function(){
  console.log("Hello two in 2 sec.")
},2000)
console.log("My name is: "+ "hello 3");
console.log(promise)



//fetch google.com homepage =>console.log("google.com, hompage done")
//fetch data from the data set
//fetch pictures  from the servers
//print downloading
//rest of the script
 
