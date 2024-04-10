// A simplified custom fetch function that simulates fetching data from an API
function customFetch(url, status = 200) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data from ${url}...`);

    // Simulated response data
    const responseData = {
      status: status,
      json: () => Promise.resolve({ message: "This is a simulated response" }),
    };

    // Simulate a delay to mimic network request time
    setTimeout(() => {
      if (status === 200) {
        resolve(responseData);
      } else {
        reject(new Error(`${status}`));
      }
    }, 1000); // Delay of 1 second
  });
}

// Using the custom fetch function
customFetch("https://jsonplaceholder.typicode.com/posts/1", 404)
  .then((response) => {
    console.log(`Response Status: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Fetch Error:", error.message);
  });
