/*
Exercise 4: Understanding HTTP Status Codes
Description: Modify the GET request in Exercise 1 to log the HTTP status code to the console. 
Handle the cases for status codes 200 (OK) and 404 (Not Found) by displaying appropriate messages.
*/

// Exercise 4
fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log("Status Code:", response.status);
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error("Resource not found");
      } else {
        throw new Error("An error occurred");
      }
    })
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      outputDiv.textContent = error.message;
      console.error("Error fetching JSON:", error);
    });
});
