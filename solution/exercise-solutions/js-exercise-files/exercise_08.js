/*
Exercise 8: Handling Network Errors
Description: Simulate a network error by making a request to an invalid URL and handle the error gracefully by displaying a message in the #output div.
*/

// Exercise 8
fetchJsonButton.addEventListener("click", () => {
  fetch("https://invalid-url")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      outputDiv.textContent = "Network error occurred";
      console.error("Network error:", error);
    });
});
