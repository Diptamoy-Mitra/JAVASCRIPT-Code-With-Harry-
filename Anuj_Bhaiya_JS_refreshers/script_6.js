//for asnychronus promise

function getChees(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chees = "👏";
      console.log('====================================');
      // console.log('here is the cheese', chees);
      console.log('====================================');
      resolve(chees);
    }, 2000);
  })
}

function makeDough(chees){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = chees+"🍞";
      console.log('====================================');
      // console.log('here is the dough', dough);
      console.log('====================================');
      resolve(dough);
    }, 2000);
  })
}

function makePizza(dough){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza= dough+"🍕";
      console.log('====================================');
      // console.log('here is the pizza', piza);
      console.log('====================================');
      resolve(pizza);
    }, 2000);
  })
}


//then finally  catch method
/*
getChees()
.then((chees)=>{
  console.log('here is the cheese  ', chees);
  return makeDough(chees);
})
.then((dough)=>{
  console.log('here is the dough  ', dough);
  return makeDough(dough);
})
.then((pizza)=>{
  console.log('here is the pizza  ', pizza);
})
.catch((err)=>{
  console.log('error occured ',err)
}).finally(()=>{
  console.log('====================================');
  console.log('finally');
  console.log('====================================');
})

*/



//async awit method
async function orderPizza(){
  try {
    const chees= await getChees();
    console.log('here is the cheese  ', chees);
    const dough= await makeDough(chees);
    console.log('here is the dough  ', dough);
    const pizza= await makePizza(dough);
    console.log('here is pizza ready    ',pizza);
  } catch (error) {
    console.log(error);
  }
 
}
orderPizza();