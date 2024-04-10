/* 

*/

let capturingDiv = document.querySelector("#capturingDiv")
let inputBox = document.querySelector("#box")
let message = document.querySelector("#message")
let output = document.querySelector("#output")
let capturingTimeout
let processingTimeout
let clearingTimeout

capturingDiv.addEventListener("keyup", () => {
	message.innerText = "capturing"
	output.innerText = inputBox.value
	clearTimeout(capturingTimeout)
	clearTimeout(processingTimeout)
	clearTimeout(clearingTimeout)
	capturingTimeout = setTimeout(() => {
		message.innerText = "processing"
		processingTimeout = setTimeout(() => {
			message.innerText = "processing done"
			output.innerText = inputBox.value.toUpperCase()
			clearingTimeout = setTimeout(() => {
				message.innerText = "Let's begin again!"
				output.innerText = null
				inputBox.value = null
			}, 2000)
		}, 1000)
	}, 500)
})

