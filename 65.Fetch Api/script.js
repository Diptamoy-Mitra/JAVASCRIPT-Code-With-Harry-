let p=fetch('https://goweather.herokuapp.com/weather/Ny')
p.then((response)=>{
  console.log(response.status);   //status code of http
  console.log(response.ok);   //true
  return response.json();    //it confirm the api ok or not or reponsible or not
}).then((value)=>{
  console.log(value)   //print json value   //{temperature: '-3 °C', wind: '20 km/h', description: 'Light snow, mist', forecast: Array(3)}
}) 