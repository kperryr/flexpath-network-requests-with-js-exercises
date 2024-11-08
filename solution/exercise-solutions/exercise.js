/*
Exercise 1: Making a Simple GET Request with Fetch

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'fetch-json-button' is clicked. 

Display the response data in the #output (ID of 'output') div.
*/

// Exercise 1
const fetchJsonButton = document.getElementById("fetch-json-button");
const outputDiv = document.getElementById("output");

const exercise_1_fetchJsonData_event = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
};

fetchJsonButton.addEventListener("click", exercise_1_fetchJsonData_event);

/*
Exercise 2: Handling Text Responses

Description: 

When the button with ID 'fetch-text-button' is clicked, 
fetch the content from 
`https://jsonplaceholder.typicode.com/posts/5` 
and display the result as text in the #output div.

*/

// Exercise 2
const fetchTextButton = document.getElementById("fetch-text-button");
const exercise_2_fetchText_event = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then((response) => response.text())
    .then((text) => {
      outputDiv.textContent = text;
    })
    .catch((error) => {
      console.error("Error fetching text:", error);
    });
};

fetchTextButton.addEventListener("click", exercise_2_fetchText_event);

/*
Exercise 3: Making a POST Request with Fetch

Description: 

Implement a function that sends a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'post-data-button' is clicked. 

Display the response in the #output div.
*/

// Exercise 3
const postDataButton = document.getElementById("post-data-button");

const exercise_3_postData_event = () => {
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
};

postDataButton.addEventListener("click", exercise_3_postData_event);

/*
Exercise 4: Understanding HTTP Status Codes

Description: 

Modify the GET request in Exercise 1 to log the HTTP status code to the console. 

Handle the cases for status codes 200 (OK) and 
404 (Not Found) by displaying appropriate messages.
*/

// Exercise 4
fetchJsonButton.removeEventListener("click", exercise_1_fetchJsonData_event);
const exercise_4_getJsonData_event = () => {
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
};

fetchJsonButton.addEventListener("click", exercise_4_getJsonData_event);

/*
Exercise 5: Setting Custom HTTP Headers
Description: When making the POST request in Exercise 3, add a custom header X-Custom-Header: MyHeaderValue to the request.
*/

// Exercise 5

fetchJsonButton.removeEventListener("click", exercise_3_postData_event);
const exercise_5_postData_event = () => {
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
};
postDataButton.addEventListener("click", exercise_5_postData_event);

/*
Exercise 6: Content Negotiation with Accept Header

Description: 

Modify the GET request in Exercise 1 to set the 
Accept header to 'application/json' and log the 
response headers to the console.
*/

// Exercise 6

fetchJsonButton.removeEventListener("click", exercise_4_getJsonData_event);
const exercise_6_getJsonData_event = () => {
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
};
fetchJsonButton.addEventListener("click", exercise_6_getJsonData_event);

/*
Exercise 7: Using Try-Catch for Error Handling
Description: Wrap the Fetch call in Exercise 2 inside a try-catch block to handle any exceptions that may be thrown.
*/

// Exercise 7
fetchTextButton.removeEventListener("click", exercise_2_fetchText_event);
const exercise_7_fetchText_event = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const text = await response.text();
    outputDiv.textContent = text;
  } catch (error) {
    console.error("Error fetching text:", error);
  }
};
fetchTextButton.addEventListener("click", exercise_7_fetchText_event);

/*
Exercise 8: Handling Network Errors
Description: Simulate a network error by making a request to an invalid URL and handle the error gracefully by displaying a message in the #output div.
*/

// Exercise 8
fetchJsonButton.removeEventListener("click", exercise_6_getJsonData_event);
const exercise_8_getJsonData_event = () => {
  fetch("https://invalid-url")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      outputDiv.textContent = "Network error occurred";
      console.error("Network error:", error);
    });
};
fetchJsonButton.addEventListener("click", exercise_8_getJsonData_event);

/*
Exercise 9: Aborting a Fetch Request
Description: Use AbortController to abort a Fetch request when the abort-request-button is clicked. Display a message indicating that the request was aborted.
*/

// Exercise 9
fetchJsonButton.removeEventListener("click", exercise_8_getJsonData_event);

const abortRequestButton = document.getElementById("abort-request-button");
let controller;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const exercise_9_event = async () => {
  controller = new AbortController();

  sleep(5000).then(() =>
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
      })
  );
};

fetchJsonButton.addEventListener("click", exercise_9_event);

const exercise_9_abort_event = () => {
  if (controller) {
    controller.abort();
  }
};

abortRequestButton.addEventListener("click", exercise_9_abort_event);

/*
Exercise 10: Tracking Download Progress
Description: Implement a function that downloads a large file using Fetch and streams the 
response using ReadableStream. Update the progress bar #download-progress as data is received.
*/

// Exercise 10
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 11: Understanding CORS Errors
Description: Make a Fetch request to an API that does not allow cross-origin requests when the cors-request-button is clicked. Observe and log the CORS error.
*/

// Exercise 11
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 12: Configuring a CORS Request
Description: Modify the request in Exercise 11 to include the mode: 'no-cors' option and observe the changes in the response.
*/

// Exercise 12
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 13: Handling Preflight Requests
Description: Make a Fetch request with the method DELETE to an API endpoint, 
and observe the preflight OPTIONS request in the Network tab of your browser's developer tools.
*/

// Exercise 13
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 14: Updating the UI Based on HTTP Responses
Description: After successfully fetching data in Exercise 1, update the UI by creating a list of titles from the fetched posts.
*/

// Exercise 14
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 15: Managing a Shopping Cart
Description: Implement functionality to add products to a shopping cart when the buttons 
with class add-to-cart-button are clicked. Update the #cart-output div to display the list of product IDs in the cart.
*/

// Exercise 15
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 16: Persisting Cart Data with Session Storage
Description: Modify Exercise 15 to save the cart data in sessionStorage so that the cart persists across page reloads.
*/

// Exercise 16
// Load cart from sessionStorage
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 17: Handling Malformed JSON Responses
Description: Fetch data from a URL that returns malformed JSON and handle the parsing error using a try-catch block.
*/

// Exercise 17
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 18: Uploading Files with Fetch
Description: Implement a file upload functionality that sends a selected file to a server endpoint using Fetch with the POST method.
*/

/*
<!-- Add this to your HTML inside #api-section -->
<input type="file" id="file-input">
<button id="upload-button">Upload File</button>
*/

// Exercise 18
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 19: Retrying Failed Requests
Description: Implement a function that retries a failed Fetch request up to 3 times before giving up.
*/

// Exercise 19
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 20: Parallel Requests with Promise.all
Description: Make multiple Fetch requests in parallel to 
https://jsonplaceholder.typicode.com/posts/1 and https://jsonplaceholder.typicode.com/posts/2, and display both responses in the #output div.
*/

// Exercise 20
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 21: Chaining Promises for Sequential Requests
Description: Make a Fetch request to get a post, then use data from the response to make another request to get comments for that post. Display the combined data.
*/

// Exercise 21
placeholder = `Delete this 
									block 
									and 
									code 
									here`;
