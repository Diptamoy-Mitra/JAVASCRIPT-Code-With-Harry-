//setTimeOut
// console.log('start')
// setTimeout(()=>{
// console.log('inside timeout')
// }, 2000)
// console.log('end')




//call backhell
function getChees(callback) {
  setTimeout(() => {
    const chees = "👏"
    console.log('getChees', chees);
    // return chees; //not working
    callback(chees)
  }, 4000);
  return undefined;
}
// console.log(getChees());
// getChees((chese)=>{
//   console.log('got cheese',chese);
//   })



function makeDough(chees, callback) {
  setTimeout(() => {
    const dough = chees + "🍞";
    console.log('here is douh', dough);
    callback(dough)

  }, 2000);
}

function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log('here is pizza', pizza);
    callback(pizza)

  }, 2000);
}

getChees((chese) => {
  makeDough(chese, (dough) => {
    // console.log('here is dough',dough);
    bakePizza(dough, (pizza) => {
      console.log('got pizza', pizza);
    });
  });
});
// pizza-->dough--->chees