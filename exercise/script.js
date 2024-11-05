/*
Exercise 1: Making a Simple GET Request with Fetch
Description: Use the Fetch API to make a GET request to https://jsonplaceholder.typicode.com/posts/1 when 
the button with ID fetch-json-button is clicked. Display the response data in the #output div.
*/

// Exercise 1
const fetchJsonButton = document.getElementById("fetch-json-button");
const outputDiv = document.getElementById("output");

fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});

/*
Exercise 2: Handling Text Responses
Description: When the button with ID fetch-text-button is clicked, fetch the text content from https://www.example.com and display it in the #output div.
*/

// Exercise 2
const fetchTextButton = document.getElementById("fetch-text-button");

fetchTextButton.addEventListener("click", () => {
  fetch("https://www.example.com")
    .then((response) => response.text())
    .then((text) => {
      outputDiv.textContent = text;
    })
    .catch((error) => {
      console.error("Error fetching text:", error);
    });
});

/*
Exercise 3: Making a POST Request with Fetch
Description: Implement a function that sends a POST request to https://jsonplaceholder.typicode.com/posts 
with JSON data when the post-data-button is clicked. Display the response in the #output div.
*/

// Exercise 3
const postDataButton = document.getElementById("post-data-button");

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

/*
Exercise 8: Handling Network Errors
Description: Simulate a network error by making a request to an invalid URL and handle the error gracefully by displaying a message in the #output div.
*/

// Exercise 8
fetchJsonButton.addEventListener("click", () => {
  fetch("https://invalid-url")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      outputDiv.textContent = "Network error occurred";
      console.error("Network error:", error);
    });
});

/*
Exercise 9: Aborting a Fetch Request
Description: Use AbortController to abort a Fetch request when the abort-request-button is clicked. Display a message indicating that the request was aborted.
*/

// Exercise 9
const abortRequestButton = document.getElementById("abort-request-button");
let controller;

fetchJsonButton.addEventListener("click", () => {
  controller = new AbortController();
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        outputDiv.textContent = "Fetch request was aborted";
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
});

abortRequestButton.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

/*
Exercise 10: Tracking Download Progress
Description: Implement a function that downloads a large file using Fetch and streams the 
response using ReadableStream. Update the progress bar #download-progress as data is received.
*/

// Exercise 10
const downloadButton = document.getElementById("download-button");
const downloadProgress = document.getElementById("download-progress");

downloadButton.addEventListener("click", () => {
  fetch("https://speed.hetzner.de/100MB.bin")
    .then((response) => {
      const contentLength = response.headers.get("Content-Length");
      if (!contentLength) {
        throw new Error("Content-Length header is missing");
      }
      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();

      return new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              loaded += value.length;
              const progress = (loaded / total) * 100;
              downloadProgress.value = progress;
              controller.enqueue(value);
              push();
            });
          }
          push();
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.blob())
    .then((blob) => {
      console.log("Download complete");
    })
    .catch((error) => {
      console.error("Download error:", error);
    });
});

/*
Exercise 11: Understanding CORS Errors
Description: Make a Fetch request to an API that does not allow cross-origin requests when the cors-request-button is clicked. Observe and log the CORS error.
*/

// Exercise 11
const corsRequestButton = document.getElementById("cors-request-button");
const corsOutput = document.getElementById("cors-output");

corsRequestButton.addEventListener("click", () => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      corsOutput.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      corsOutput.textContent = "CORS error occurred";
      console.error("CORS error:", error);
    });
});

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

/*
Exercise 13: Handling Preflight Requests
Description: Make a Fetch request with the method DELETE to an API endpoint, 
and observe the preflight OPTIONS request in the Network tab of your browser's developer tools.
*/

// Exercise 13
corsRequestButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        corsOutput.textContent = "Resource deleted successfully";
      } else {
        corsOutput.textContent = "Failed to delete resource";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

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

/*
Exercise 15: Managing a Shopping Cart
Description: Implement functionality to add products to a shopping cart when the buttons 
with class add-to-cart-button are clicked. Update the #cart-output div to display the list of product IDs in the cart.
*/

// Exercise 15
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const cartOutput = document.getElementById("cart-output");
let cart = [];

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product-id");
    cart.push(productId);
    cartOutput.textContent = `Cart: ${cart.join(", ")}`;
    button.classList.add("added-to-cart");
    button.textContent = "Added";
  });
});

/*
Exercise 16: Persisting Cart Data with Session Storage
Description: Modify Exercise 15 to save the cart data in sessionStorage so that the cart persists across page reloads.
*/

// Exercise 16
// Load cart from sessionStorage
cart = JSON.parse(sessionStorage.getItem("cart")) || [];
cartOutput.textContent =
  cart.length > 0 ? `Cart: ${cart.join(", ")}` : "Cart is empty.";

addToCartButtons.forEach((button) => {
  const productId = button.getAttribute("data-product-id");
  if (cart.includes(productId)) {
    button.classList.add("added-to-cart");
    button.textContent = "Added";
  }
  button.addEventListener("click", () => {
    if (!cart.includes(productId)) {
      cart.push(productId);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      cartOutput.textContent = `Cart: ${cart.join(", ")}`;
      button.classList.add("added-to-cart");
      button.textContent = "Added";
    }
  });
});

/*
Exercise 21: Handling Malformed JSON Responses
Description: Fetch data from a URL that returns malformed JSON and handle the parsing error using a try-catch block.
*/

// Exercise 21
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

/*
Exercise 22: Uploading Files with Fetch
Description: Implement a file upload functionality that sends a selected file to a server endpoint using Fetch with the POST method.
*/

/*
<!-- Add this to your HTML inside #api-section -->
<input type="file" id="file-input">
<button id="upload-button">Upload File</button>
*/

// Exercise 22
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

/*
Exercise 23: Retrying Failed Requests
Description: Implement a function that retries a failed Fetch request up to 3 times before giving up.
*/

// Exercise 23
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

/*
Exercise 24: Parallel Requests with Promise.all
Description: Make multiple Fetch requests in parallel to 
https://jsonplaceholder.typicode.com/posts/1 and https://jsonplaceholder.typicode.com/posts/2, and display both responses in the #output div.
*/

// Exercise 24
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

/*
Exercise 25: Chaining Promises for Sequential Requests
Description: Make a Fetch request to get a post, then use data from the response to make another request to get comments for that post. Display the combined data.
*/

// Exercise 25
fetchJsonButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      )
        .then((response) => response.json())
        .then((comments) => {
          outputDiv.textContent = JSON.stringify({ post, comments }, null, 2);
        });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

/*
Note: For some exercises that involve making requests to external APIs, you may need to replace placeholder URLs with 
actual endpoints that allow cross-origin requests or set up a simple server to handle requests. 
Additionally, be cautious when handling file uploads and ensure you have the appropriate backend infrastructure if you intend to test those features.
*/
