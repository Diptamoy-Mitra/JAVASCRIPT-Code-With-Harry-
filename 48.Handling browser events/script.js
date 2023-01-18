btn.addEventListener('click', function(e){
  alert("hello world1! ")
})
btn.addEventListener('click', function(e){
  alert("hello world2 ! ")
})

let a=prompt("what is your favorite no: ")
if(a=="2")
{
  btn.removeEventListener('click', function(e){
    alert("Hi")
  })
}