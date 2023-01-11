//when an event happens the browser creates an event object, puts details into it and passes it as an argument to the handler.
//


let x=(e)=>{
  console.log(e)   //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}   //event object
  console.log(e.target)  // <button id="btn">Click Me</button>
  console.log(e.clientX)   //x co-ordinates of cursor  print 
  alert("function x")
}
let y=(e)=>{
  alert("function y")
}


btn.addEventListener('click', x)

// btn.addEventListener('click', y)

// let a=prompt("whats age: ")
// if(a=="2"){
//   btn.removeEventListener('click', x)
// }



