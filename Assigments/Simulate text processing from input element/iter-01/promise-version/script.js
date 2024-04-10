let capturingDiv = document.querySelector("#capturingDiv");
let inputBox = document.querySelector("#box");
let message = document.querySelector("#message");
let output = document.querySelector("#output");

let capturing = null
let processing = null
let resetting = null

function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
}

function delayCapturing(ms) {
		return new Promise(resolve => capturing = setTimeout(resolve, ms));
}

function delayProcessing(ms) {
		return new Promise(resolve => processing = setTimeout(resolve, ms));
}

function delayReseting(ms) {
		return new Promise(resolve => resetting = setTimeout(resolve, ms));
}

capturingDiv.addEventListener("keyup", function() {
		message.innerText = "capturing!!";
		output.innerText = inputBox.value;
		clearTimeout(capturing);
		clearTimeout(processing);
		clearTimeout(resetting);

		delayCapturing(500)
				.then(() => {
						message.innerText = "processing";
						return delayProcessing(1000); 
				})
				.then(() => {
						message.innerText = "processing done";
						output.innerText = inputBox.value.toUpperCase();
						return delayReseting(2000); 
				})
				.then(() => {
						message.innerText = "Let's begin again!";
						output.innerText = null;
						inputBox.value = null;
				})
				.catch(error => {
						console.error("An error occurred:", error);
				});
});
