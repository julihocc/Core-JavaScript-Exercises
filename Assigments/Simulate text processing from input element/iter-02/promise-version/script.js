let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let input = document.querySelector("#output");
let capturing = null;
let processingDone = null;
let processing = null;
let resetting = null;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function delayCapturing(ms) {
  return new Promise((resolve) => (capturing = setTimeout(resolve, ms)));
}

function delayProcessing(ms) {
  return new Promise((resolve) => (processing = setTimeout(resolve, ms)));
}

function delayProcessingDone(ms) {
  return new Promise((resolve) => (processingDone = setTimeout(resolve, ms)));
}

function delayReseting(ms) {
  return new Promise((resolve) => (resetting = setTimeout(resolve, ms)));
}

capturingDiv.addEventListener("keyup", function () {
  message.innerText = "capturing!!";
  clearTimeout(capturing);
  clearTimeout(processing);
  clearTimeout(processingDone);
  clearTimeout(resetting);

  delayCapturing(500)
    .then(() => {
      message.innerText = "processing";
    })
    .then(() => {
      for (let i = 0; i < inputBox.value.length; i++) {
        setTimeout(() => {
          input.innerText = inputBox.value.slice(0, i + 1);
        }, i * 100);
      }
    })
    .then(() => delayProcessingDone(1000 + inputBox.value.length * 100))
    .then(() => {
      message.innerText = "processing done";
      // output.innerText = inputBox.value.toUpperCase();
    })
    .then(() => delayReseting(2000 + inputBox.value.length * 100))
    .then(() => {
      message.innerText = "Let's begin again!";
      input.innerText = null;
      inputBox.value = null;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
