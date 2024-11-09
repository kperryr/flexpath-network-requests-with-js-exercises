/*

We don't have a resource for you to be able to test file uploads and downlaods,
but I wanted to include the code for how you can manage a file upload with
HTML and JavaScript in a web page.


Example: Uploading Files with Fetch

Example Description: 

Implement a file upload functionality that sends a selected file to a server endpoint using Fetch with the POST method.


*/

/*
  <!-- Add this to your HTML inside #api-section -->
  <input type="file" id="file-input">
  <button id="upload-button">Upload File</button>
*/

const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");

uploadButton.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://example.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          outputDiv.textContent = "File uploaded successfully";
        } else {
          outputDiv.textContent = "File upload failed";
        }
      })
      .catch((error) => {
        console.error("Upload error:", error);
      });
  } else {
    outputDiv.textContent = "No file selected";
  }
});
