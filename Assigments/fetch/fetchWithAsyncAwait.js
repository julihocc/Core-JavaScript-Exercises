// Import the fetch module
// const fetch = require('node-fetch');
import fetch from "node-fetch";

// Function to fetch data from JSONPlaceholder
async function fetchData() {
  try {
    // Specify the URL for the resource you want to fetch
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    // Use fetch to get data from the URL
    const response = await fetch(url);

    // Convert the response to JSON
    const data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
fetchData();
