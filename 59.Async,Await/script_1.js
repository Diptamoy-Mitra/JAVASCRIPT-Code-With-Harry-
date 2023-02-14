async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg")
    }, 1000);
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg")
    }, 7000);
  })
  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)

  console.log("Fetching delhi:...")
  let delhiw=await delhiWeather
  console.log(delhiw)
  console.log("Fetching bangalore:...")
  let bangaloreW=await bangaloreWeather
  console.log(bangaloreW)

  return [delhiw,bangaloreW]
}


//it ran parrallely
const cherry=()=>{
  console.log("Hi , I ran parrally with harry")
}


console.log("Welcome weather info")
let a=harry()
console.log(a)//Promise {<pending>}
cherry()
