/*
Exercise 6: Content Negotiation with Accept Header
Description: Modify the GET request in Exercise 1 to set the Accept header to application/json and log the response headers to the console.
*/

// Exercise 6
fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log("Response Headers:", response.headers);
      return response.json();
    })
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});
