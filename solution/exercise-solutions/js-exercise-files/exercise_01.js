/*
Exercise 1: Making a Simple GET Request with Fetch
Description: Use the Fetch API to make a GET request to https://jsonplaceholder.typicode.com/posts/1 when 
the button with ID fetch-json-button is clicked. Display the response data in the #output div.
*/

// Exercise 1
const fetchJsonButton = document.getElementById("fetch-json-button");
const outputDiv = document.getElementById("output");

fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
