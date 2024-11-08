/*
Exercise 10: Tracking Download Progress
Description: Implement a function that downloads a large file using Fetch and streams the 
response using ReadableStream. Update the progress bar #download-progress as data is received.
*/

// Exercise 10
const downloadButton = document.getElementById("download-button");
const downloadProgress = document.getElementById("download-progress");

downloadButton.addEventListener("click", () => {
  fetch("https://speed.hetzner.de/100MB.bin")
    .then((response) => {
      const contentLength = response.headers.get("Content-Length");
      if (!contentLength) {
        throw new Error("Content-Length header is missing");
      }
      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();

      return new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              loaded += value.length;
              const progress = (loaded / total) * 100;
              downloadProgress.value = progress;
              controller.enqueue(value);
              push();
            });
          }
          push();
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.blob())
    .then((blob) => {
      console.log("Download complete");
    })
    .catch((error) => {
      console.error("Download error:", error);
    });
});
