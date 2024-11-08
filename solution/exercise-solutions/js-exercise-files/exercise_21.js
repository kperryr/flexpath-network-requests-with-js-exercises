/*
Exercise 21: Chaining Promises for Sequential Requests
Description: Make a Fetch request to get a post, then use data from the response to make another request to get comments for that post. Display the combined data.
*/

// Exercise 21
fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      )
        .then((response) => response.json())
        .then((comments) => {
          outputDiv.textContent = JSON.stringify({ post, comments }, null, 2);
        });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
