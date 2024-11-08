/*
Exercise 12: Configuring a CORS Request
Description: Modify the request in Exercise 11 to include the mode: 'no-cors' option and observe the changes in the response.
*/

// Exercise 12
corsRequestButton.addEventListener("click", () => {
  fetch("https://api.example.com/data", { mode: "no-cors" })
    .then((response) => {
      corsOutput.textContent = "Request made with no-cors mode";
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
