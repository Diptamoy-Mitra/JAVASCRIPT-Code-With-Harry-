//A callback function is a function passed into another function as an argument,which is then invoked inside the outer function
//to complete an action
function loadScript(src ,callback){
  let script=document.createElement('script')
  script.src=src;

 script.onload=function(){
   console.log("loaded SRC: "+src)
   callback(null,src);
 }

 script.onerror=function (){
  console.log("error loaded script in  SRC .........: "+src)
  callback(new Error("SRC got some errors......."));
 }


 document.body.appendChild(script)

}
function hello(error,src){
  if(error){
    console.log(error)
    return;
  }
 alert("Hello function run    "+src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)