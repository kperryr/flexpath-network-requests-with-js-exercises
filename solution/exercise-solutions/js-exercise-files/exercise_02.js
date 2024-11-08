/*
Exercise 2: Handling Text Responses
Description: When the button with ID fetch-text-button is clicked, fetch the text content from https://www.example.com and display it in the #output div.
*/

// Exercise 2
const fetchTextButton = document.getElementById("fetch-text-button");

fetchTextButton.addEventListener("click", () => {
  fetch("https://www.example.com")
    .then((response) => response.text())
    .then((text) => {
      outputDiv.textContent = text;
    })
    .catch((error) => {
      console.error("Error fetching text:", error);
    });
});
