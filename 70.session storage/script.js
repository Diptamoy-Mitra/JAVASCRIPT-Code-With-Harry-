// sessionStorage.setItem("jj","hhhhhh")
// undefined
// sessionStorage.removeItem("jj")
// undefined
// sessionStorage.setItem("name","harry")
// undefined
// sessionStorage.getItem("name")
// 'harry'


window.onstorage=(e)=>{
  alert("changed")
  console.log(e)
}