// Spread operator

// const languages=['C','C++','JS']
// const newLanguages=['Typescript',...languages, 'JAVA']    //) ['Typescript', 'C', 'C++', 'JS', 'JAVA']
// console.log(newLanguages)




const settings={
  volume:10,
  brightness: 80,

}
console.log(settings)
//by referensce
const newSetting=settings;
newSetting.volume=20
console.log(newSetting==settings)   //true  //same object
console.log(settings.volume)   //20


//by value copy
const newSet={...settings,volume:60} //{ volume: 60, brightness: 80 }
console.log(newSet)
