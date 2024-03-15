let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let output = document.querySelector("#output");
let capturing = null;
let processingDone = null;
let processing = null;
let resetting = null;

class CancellablePromise extends Promise {
  constructor(executor) {
    let cancelHandler;
    super((resolve, reject) => {
      // Pass a cancel function to the executor
      cancelHandler = () => {
        reject({ isCancelled: true });
      };
      // Call the original executor with resolve and reject
      executor(resolve, reject);
    });
    this.cancel = cancelHandler;
  }
}

function delay(ms) {
  return new CancellablePromise((resolve, reject) => setTimeout(resolve, ms));
}

capturingDiv.addEventListener("keyup", function () {
  message.innerText = "capturing!!";
  console.log(capturing);
  // if(capturing) capturing.cancel();
  capturing?.cancel();
  // clearTimeout(processing);
  processing?.cancel();
  // clearTimeout(processingDone);
  processingDone?.cancel();
  // clearTimeout(resetting);
  resetting?.cancel();

  // delayCapturing(500)
  Promise.resolve()
    .then(() => {
      // console.log("capturing");
      capturing = delay(500);
      // console.log(capturing);
      return capturing;
    })
    .then(() => {
      message.innerText = "processing";
    })
    .then(() => {
      for (let i = 0; i < inputBox.value.length; i++) {
        // processing = setTimeout(() => {
        //   input.innerText = inputBox.value.slice(0, i + 1);
        // }, i * 100);
        processing = delay(100 * i);
        processing.then(() => {
          output.innerText = inputBox.value.slice(0, i + 1);
        });
      }
    })
    // .then(() => delayProcessingDone(1000 + inputBox.value.length * 100))
    .then(() => {
      processingDone = delay(500 + inputBox.value.length * 100);
      return processingDone;
    })
    .then(() => {
      message.innerText = "processing done";
      // output.innerText = inputBox.value.toUpperCase();
    })
    // .then(() => delayReseting(2000 + inputBox.value.length * 100))
    .then(() => {
      resetting = delay(500 + inputBox.value.length * 100);
      return resetting;
    })
    .then(() => {
      message.innerText = "Let's begin again!";
      output.innerText = null;
      inputBox.value = null;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
