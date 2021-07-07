const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Promise
// fetch(url)
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// Async await
async function fetchAPI() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
fetchAPI();
