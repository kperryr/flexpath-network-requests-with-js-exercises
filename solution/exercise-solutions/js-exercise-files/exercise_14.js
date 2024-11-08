/*
Exercise 14: Updating the UI Based on HTTP Responses
Description: After successfully fetching data in Exercise 1, update the UI by creating a list of titles from the fetched posts.
*/

// Exercise 14
fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.innerHTML = "";
      const ul = document.createElement("ul");
      data.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        ul.appendChild(li);
      });
      outputDiv.appendChild(ul);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
