/*
Exercise 17: Handling Malformed JSON Responses
Description: Fetch data from a URL that returns malformed JSON and handle the parsing error using a try-catch block.
*/

// Exercise 17
fetchJsonButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      outputDiv.textContent = JSON.stringify(data, null, 2);
    } catch (parseError) {
      outputDiv.textContent = "Error parsing JSON";
      console.error("JSON parse error:", parseError);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
});
