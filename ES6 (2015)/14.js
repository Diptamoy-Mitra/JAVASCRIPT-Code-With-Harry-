// clases 


//old method
function Person(name){  //blue print
  this.name=name;
}
const rakesh=new Person('Rakesh')
console.log(rakesh)  //Person {name: 'Rakesh'} 
rakesh.name='Coders'
console.log(rakesh) //Person {name: 'Coders'}






//new method

class per{
  name;

  constructor(name){
    this.name=name;
  }
  greet(){
    console.log("Hi.....folks....")
  }
}
class GreetPer extends per{  //inheritance use
  attitude='cool'
}


const rak=new per('GFG')
console.log(rak)  //per {name: 'GFG'}
const jon=new per('Coding ninja')
console.log(jon)  //per {name: 'Coding ninja'}
jon.name='Coding geek'
console.log(jon) //per {name: 'Coding geek'}
console.log(jon.greet()) //Hi.....folks....

const b=new GreetPer('Jhonny');
console.log(b.greet()) //Hi.....folks.... //inheritance property
console.log(b) //GreetPer {name: 'Jhonny', attitude: 'cool'}


