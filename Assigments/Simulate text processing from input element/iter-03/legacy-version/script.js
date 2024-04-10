/* 

*/

let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let output = document.querySelector("#output");
let capturingTimeout;
let processingDoneTimeout;
let processingTimeout;
let resetingTimeout;

let processText = (text) => {
  let totalTimeForProcessing = 100 * text.length;
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      output.innerText = text.slice(0, i + 1);
    }, i * 100);
  }
  return totalTimeForProcessing;
};

capturingDiv.addEventListener("keyup", () => {
  message.innerText = "capturing";
  // output.innerText = inputBox.value
  clearTimeout(capturingTimeout);
  clearTimeout(processingDoneTimeout);
  clearTimeout(resetingTimeout);
  capturingTimeout = setTimeout(() => {
    message.innerText = "processing";
    // let totalTimeForProcessing = processText(inputBox.value);
    let totalTimeForProcessing = 100 * inputBox.value.length;
    for (let i = 0; i < inputBox.value.length; i++) {
      processingTimeout = setTimeout(() => {
        output.innerText = inputBox.value.slice(0, i + 1);
      }, i * 100);
    }
    processingDoneTimeout = setTimeout(() => {
      message.innerText = "processing done";
      // output.innerText = inputBox.value.toUpperCase()
      // output.innerText = processText(inputBox.value)
      resetingTimeout = setTimeout(() => {
        message.innerText = "Let's begin again!";
        output.innerText = null;
        inputBox.value = null;
      }, 2100 + totalTimeForProcessing);
    }, 100 + totalTimeForProcessing);
  }, 500);
});
