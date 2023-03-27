// FOR OF LOOP

//Array, string, iterable object, set, map


const numbers=[2,3,5,7];

for(const num of numbers){
  console.log(num)
}

const languages='java'
for(const char of languages){
  console.log(char)
}

const person={
  name: 'Rakesh',
  city: 'Moscow'
};
// for (const it of person) {
//   console.log(it)      //not iterable
// }

for (const it of Object.entries( person)) {
    console.log(it)  //(2) ['city', 'Moscow']   
  }
  