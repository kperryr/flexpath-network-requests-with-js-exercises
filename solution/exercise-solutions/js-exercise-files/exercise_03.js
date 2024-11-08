/*
Exercise 3: Making a POST Request with Fetch
Description: Implement a function that sends a POST request to https://jsonplaceholder.typicode.com/posts 
with JSON data when the post-data-button is clicked. Display the response in the #output div.
*/

// Exercise 3
const postDataButton = document.getElementById("post-data-button");

postDataButton.addEventListener("click", () => {
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error posting data:", error);
    });
});
