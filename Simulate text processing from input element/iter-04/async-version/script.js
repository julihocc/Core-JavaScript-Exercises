let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let output = document.querySelector("#output");

let capturing = null
let processing = null
let processingDone = null
let reseting = null

// console.asyncLog = (...args) => setTimeout(console.log, 0, ...args);

class CancellablePromise extends Promise {
  constructor(executor) {
    let cancelHandler;
    super((resolve, reject) => { 
      cancelHandler = () => {
        reject({ isCancelled: true });
      }; 
      executor(resolve, reject);
    });
    this.cancel = cancelHandler;
  }
}

function delay(ms) {
  return new CancellablePromise((resolve, reject) => setTimeout(resolve, ms));
}

async function * processInput(input) {
	for(let i = 0; i < input.length; i++) {
		processing =  delay(100*i);
		await processing;
		yield input.slice(0, i + 1).toUpperCase();
	}
}

capturingDiv.addEventListener("keyup", async () => {
	message.innerText = "capturing!!";
	output.innerText = null;

	capturing?.cancel()
	processing?.cancel()
	processingDone?.cancel()
	reseting?.cancel()
 
	capturing = delay(500);
	await capturing;
	// console.asyncLog(capturing);
	message.innerText = "processing";

	// for(let i = 0; i < inputBox.value.length; i++) {
	// 	processing =  delay(100*i);
	// 	await processing;
	// 	output.innerText = inputBox.value.slice(0, i + 1).toUpperCase();
	// }

	for await (let value of processInput(inputBox.value)) {
		output.innerText = value;
	}
 
	processingDone =  delay(500+inputBox.value.length*100);
	await processingDone;
	message.innerText = "processing done";
 
	reseting =  delay(1000+inputBox.value.length*100);
	await reseting;
	message.innerText = "Let's begin again!";
	output.innerText = null;
	inputBox.value = null;
});
