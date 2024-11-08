/*
Exercise 19: Retrying Failed Requests
Description: Implement a function that retries a failed Fetch request up to 3 times before giving up.
*/

// Exercise 19
function fetchWithRetry(url, options = {}, retries = 3) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      if (retries > 0) {
        return fetchWithRetry(url, options, retries - 1);
      } else {
        throw new Error("Max retries reached");
      }
    }
    return response.json();
  });
}

fetchJsonButton.addEventListener("click", () => {
  fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      outputDiv.textContent = error.message;
      console.error("Fetch error:", error);
    });
});
