const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Promise
// axios.get(url).then((response) => {
//   console.log(response.data);
// });

// Async await
async function fetch() {
  const response = await axios.get(url);

  console.log(response.data);
}
fetch();
