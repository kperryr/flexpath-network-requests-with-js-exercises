/*
Exercise 20: Parallel Requests with Promise.all
Description: Make multiple Fetch requests in parallel to 
https://jsonplaceholder.typicode.com/posts/1 and https://jsonplaceholder.typicode.com/posts/2, and display both responses in the #output div.
*/

// Exercise 20
fetchJsonButton.addEventListener("click", () => {
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
      res.json()
    ),
  ])
    .then(([post1, post2]) => {
      outputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
