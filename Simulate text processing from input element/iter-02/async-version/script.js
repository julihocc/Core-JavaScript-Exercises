let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let output = document.querySelector("#output");

let capturing = null
let processing = null
let processingDone = null
let reseting = null


// Utility function to create a delay
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function delayCapturing(ms) {
	return new Promise(resolve => capturing = setTimeout(resolve, ms))
}

function delayProcessing(ms) {
	return new Promise(resolve => processing = setTimeout(resolve, ms))
}

function delayProcessingDone(ms) {
  return new Promise((resolve) => (processingDone = setTimeout(resolve, ms)));
}


function delayReseting(ms) {
	return new Promise(resolve => reseting = setTimeout(resolve, ms))
}

capturingDiv.addEventListener("keyup", async () => {
	message.innerText = "capturing!!";
	output.innerText = inputBox.value;
	clearTimeout(capturing)
	clearTimeout(processing)
	clearTimeout(processingDone)
	clearTimeout(reseting)

	// Await for the capturing delay
	await delayCapturing(500);
	message.innerText = "processing";

	for(let i = 0; i < inputBox.value.length; i++) {
		await delayProcessing(100);
		output.innerText = inputBox.value.slice(0, i + 1).toUpperCase();
	}

	// Await for the processing delay
	await delayProcessingDone(1000);
	message.innerText = "processing done";

	// Await for the clearing delay
	await delayReseting(2000);
	message.innerText = "Let's begin again!";
	output.innerText = null;
	inputBox.value = null;
});
