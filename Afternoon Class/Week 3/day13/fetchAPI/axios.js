const axios = require('axios'); // Axios library to fetch API

const url = `https://reqres.in/api/users?page=2`;

// Promise
// axios
//   .get(url)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(erro);
//   });

// Async await
async function fetch() {
  try {
    const response = await axios.get(url);

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
fetch();
