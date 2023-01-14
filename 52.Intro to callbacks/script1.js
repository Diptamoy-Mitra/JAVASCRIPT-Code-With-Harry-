//callbacks

function loadScript(src ,callback){
   let script=document.createElement('script')
   script.src=src;
  //  script.onload=()=>callback(script)

  script.onload=function(){
    console.log("loaded SRC: "+src)
  }
  callback(src);
  document.body.appendChild(script)

}
function hello(src){
  alert("Hello function run    "+src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)