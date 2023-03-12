// let options = {
//   method: "POST",
//   'Authorization': `Bearer`,
//   Headers: {
//     "Content-type ": "application/json"
//   },
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options).then((response) => response.json()).then((json) => console.log(json));

const createTodo = async () => {
  let options = {
    method: "POST",
    'Authorization': `Bearer`,
    Headers: {
      "Content-type ": "application/json"
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  }




  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = await p.json();
  return response;
}

const mainfunc=async()=>{
  let todo= await createTodo()
  console.log(todo)
}
mainfunc()