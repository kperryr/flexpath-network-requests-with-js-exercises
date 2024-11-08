/*
Exercise 9: Aborting a Fetch Request
Description: Use AbortController to abort a Fetch request when the abort-request-button is clicked. Display a message indicating that the request was aborted.
*/

// Exercise 9
const abortRequestButton = document.getElementById("abort-request-button");
let controller;

fetchJsonButton.addEventListener("click", () => {
  controller = new AbortController();
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        outputDiv.textContent = "Fetch request was aborted";
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
});

abortRequestButton.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});
