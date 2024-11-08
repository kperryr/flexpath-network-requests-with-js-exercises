/*
Exercise 7: Using Try-Catch for Error Handling
Description: Wrap the Fetch call in Exercise 2 inside a try-catch block to handle any exceptions that may be thrown.
*/

// Exercise 7
fetchTextButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://www.example.com");
    const text = await response.text();
    outputDiv.textContent = text;
  } catch (error) {
    console.error("Error fetching text:", error);
  }
});
