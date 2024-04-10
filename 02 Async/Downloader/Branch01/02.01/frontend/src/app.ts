const fetchImageElement = document.getElementById(
  "fetch-image"
) as HTMLButtonElement;

// document.getElementById("fetch-image").addEventListener("click", function () {
fetchImageElement.addEventListener("click", function () {
  fetch("http://localhost:3000/image")
    .then((response) => {
      const contentLength = response.headers.get("Content-Length") as string;
      if (!response.body || !contentLength) {
        throw new Error("Browser does not support streaming response body");
      }
      const reader = response.body.getReader();
      let receivedLength = 0; // received that many bytes at the moment
      let chunks = []; // array of received binary chunks (comprises the body)
      return new ReadableStream({
        start(controller) {
          function read() {
            reader
              .read()
              .then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                chunks.push(value);
                receivedLength += value.length;
                const downloadProgressElement = document.getElementById(
                  "download-progress"
                ) as HTMLProgressElement;
                // document.getElementById("download-progress").value =
                downloadProgressElement.value =
                  (receivedLength / parseInt(contentLength)) * 100;
                controller.enqueue(value);
                read();
              })
              .catch((error) => {
                console.error("Stream reading failed:", error);
                controller.error(error);
              });
          }
          read();
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const img = document.createElement("img");
      img.src = url;
      // document.getElementById("image-container").appendChild(img);
      const imageContainerElement = document.getElementById(
        "image-container"
      ) as HTMLDivElement;
      imageContainerElement.appendChild(img);
    })
    .catch((error) => console.error("Fetch failed:", error));
});
