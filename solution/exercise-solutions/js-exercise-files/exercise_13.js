/*
Exercise 13: Handling Preflight Requests
Description: Make a Fetch request with the method DELETE to an API endpoint, 
and observe the preflight OPTIONS request in the Network tab of your browser's developer tools.
*/

// Exercise 13
corsRequestButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        corsOutput.textContent = "Resource deleted successfully";
      } else {
        corsOutput.textContent = "Failed to delete resource";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
