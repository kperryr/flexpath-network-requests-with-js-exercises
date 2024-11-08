/*
Exercise 11: Understanding CORS Errors
Description: Make a Fetch request to an API that does not allow cross-origin requests when the cors-request-button is clicked. Observe and log the CORS error.
*/

// Exercise 11
const corsRequestButton = document.getElementById("cors-request-button");
const corsOutput = document.getElementById("cors-output");

corsRequestButton.addEventListener("click", () => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      corsOutput.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      corsOutput.textContent = "CORS error occurred";
      console.error("CORS error:", error);
    });
});
