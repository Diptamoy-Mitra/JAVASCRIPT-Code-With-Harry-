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
  delhiWeather.then(alert)
  bangaloreWeather.then(alert)
}
// async function harry(){
//    return 5;
// }
// harry().then((x) => {
//   alert(x)
// })

console.log("Welcome")
harry()
