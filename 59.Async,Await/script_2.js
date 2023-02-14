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
const cherry=async ()=>{
  console.log("Hi , I ran parrally with harry")
}

const main1= async ()=>{
  console.log("Welcome weather info")
let a=await harry()
// console.log(a)//Promise {<pending>}
await cherry()
}

main1() 

//output
// script_2.js:33 Welcome weather info
// script_2.js:16 Fetching delhi:...
// script_2.js:18 27 deg
// script_2.js:19 Fetching bangalore:...
// script_2.js:21 21 deg
// script_2.js:29 Hi , I ran parrally with harry