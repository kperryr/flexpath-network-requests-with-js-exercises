/*
Exercise 5: Setting Custom HTTP Headers
Description: When making the POST request in Exercise 3, add a custom header X-Custom-Header: MyHeaderValue to the request.
*/

// Exercise 5
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
      "X-Custom-Header": "MyHeaderValue",
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
