/**
   * This JavaScript code creates multiple promises, handles their results, and performs HTTP requests based on the fulfilled promises.

- Two promises `p0` and `p1` are created. `p0` is resolved with a value of `0`, and `p1` is rejected with a value of `1`.
- An asynchronous function `test()` is defined that returns a value of `4`.
- `Promise.allSettled()` is used to handle an array of promises, including `p0`, `p1`, a resolved promise with a value of `2`, a rejected promise with a value of `3`, the promise returned by `test()`, and a value `5`.
- The results of all promises are logged to the console.
- The rejected promises are filtered out, and their rejection reasons are logged to the console every second.
- The fulfilled promises are filtered out, and for each fulfilled promise, a URL is constructed and fetched. The JSON response of each fetch is logged to the console.
   */
import fetch from "node-fetch";

const p0 = new Promise((resolve) => {
  resolve(0);
});

const p1 = new Promise((resolve, reject) => {
  reject(1);
});

/**
 * This is a test function.
 * @returns {Promise<number>} The number 4.
 */
async function test() {
  return 4;
}

const promises = Promise.allSettled([
  p0,
  p1,
  Promise.resolve(2),
  Promise.reject(3),
  test(),
  5,
]);

promises.then(console.log);

promises
  .then((arr) => arr.filter((obj) => obj.status === "rejected"))
  .then((arr) =>
    arr.forEach((obj, index, arr) => {
      // setInterval(() => console.log(obj.reason), 1000),
      setTimeout(() => {
        setInterval(() => console.log(obj.reason), 1000);
      }, (index / arr.length) * 1000);
    })
  );

promises
  .then((promises) => promises.filter((obj) => obj.status === "fulfilled"))
  .then((responses) =>
    responses.map(
      (obj) => `https://jsonplaceholder.typicode.com/posts/${obj.value}`
    )
  )
  .then((urls) => urls.map((url) => fetch(url)))
  .then((promises) =>
    promises.forEach((promise) =>
      promise
        .then((response) => response.json())
        .then((json) => {
          return {
            text: json.body,
            words: json.body ? countWords(json.body) : 0,
          };
        })
        .then(console.log)
    )
  );

function countWords(text) {
  return text.split(/\s+/).length;
}
