const progressBar = document.getElementById(
  "download-progress"
) as HTMLProgressElement;

/**
 * Fetches an image from the specified URL and returns the response and its content length.
 * @param {string} url - The URL to fetch the image from.
 * @returns {Promise<{response: Response, contentLength: string}>} - A promise that resolves with the response and its content length.
 */
async function fetchImage(
  url: string
): Promise<{ response: Response; contentLength: string }> {
  const response = await fetch(url);
  const contentLength = response.headers.get("Content-Length");
  if (!response.body || !contentLength) {
    throw new Error("Browser does not support streaming response body");
  }
  return { response, contentLength };
}

/**
 * Reads the given readable stream to completion, updates the progress bar, and returns a Blob.
 * @param {ReadableStreamReader} reader - The reader obtained from the response body.
 * @param {number} contentLength - The total content length of the response body.
 * @returns {Promise<Blob>} - A promise that resolves with the Blob created from the read chunks.
 */
async function readStream(reader: ReadableStreamReader<Uint8Array>, contentLength:number, onProgress: (receivedLength: number, contentLength: number) => void): Promise<Blob> {
  let receivedLength = 0; // received bytes
  let chunks = []; // array of received binary chunks
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    receivedLength += value.length;
    onProgress(receivedLength, contentLength);
  }
  return new Blob(chunks);
}

/**
 * Displays an image in the document using a Blob.
 * @param {Blob} blob - The Blob representing the image to display.
 */
async function displayImage(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = url;
  // document.getElementById("image-container").appendChild(img);
  const imageElement = document.getElementById("image-container")
  if (imageElement) {
    imageElement.appendChild(img);
  }
}

// Adds an event listener to the "Fetch Image" button to start the image fetching process.
document
  .getElementById("fetch-image")
  .addEventListener("click", async function () {
    try {
      const { response, contentLength } = await fetchImage(
        "http://localhost:3000/image"
      );
      // const blob = await readStream(response.body.getReader(), contentLength);
      const reader = response.body.getReader();
      const blob = await readStream(reader, contentLength, (progress) => {
        // Update the progress bar
        progressBar.value = progress;

        // If the progress is 100%, render the image
        if (progress === 1) {
          const objectURL = URL.createObjectURL(blob);
          imageElement.src = objectURL;
        }
      });
      const contentType = response.headers.get("Content-Type");
      if (contentType.startsWith("image/")) {
        displayImage(blob);
      } else {
        throw new Error("Content-Type is not an image");
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  });
