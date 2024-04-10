// Import the fetch module
// const fetch = require('node-fetch');
import fetch from "node-fetch";

// Function to fetch data from JSONPlaceholder using promises
function fetchData() {
  // Specify the URL for the resource you want to fetch
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  // Use fetch to get data from the URL
  fetch(url)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON from the response
    })
    .then((data) => {
      // Log the data to the console
      console.log(data);
    })
    .catch((error) => {
      // Log any errors that occur during the fetch operation
      console.error("Error fetching data:", error);
    });
}

// Call the function to fetch data
fetchData();
