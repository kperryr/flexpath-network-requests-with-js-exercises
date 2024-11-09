/*
	Values to use for multiple exercises

*/

const outputDiv = document.getElementById("exercise-1-through-9-output");
const exercise10through13Output = document.getElementById(
  "exercise-10-through-13-output"
);

/*
Exercise 1: Making a Simple GET Request with Fetch

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'fetch-json-button-exercise-1' is clicked. 

Display the response data in the #exercise-1-through-9-output (ID of 'exercise-1-through-9-output') div.
*/

// Exercise 1
const exercise1btn = document.getElementById("fetch-json-button-exercise-1");
exercise1btn.addEventListener("click", () => {
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

Description: 

When the button with ID 'fetch-text-button-exercise-2' is clicked, 
fetch the content from 
`https://jsonplaceholder.typicode.com/posts/5` 
and display the result as text in the #output div.

*/

// Exercise 2
const exercise2btn = document.getElementById("fetch-text-button-exercise-2");
exercise2btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/5")
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

Description: 

Implement a function that sends a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'post-data-button-exercise-3' is clicked. 

Display the response in the #output div.
*/

// Exercise 3
const exercise3btn = document.getElementById("post-data-button-exercise-3");
exercise3btn.addEventListener("click", () => {
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

Description: 

Copy your existing exercise 1 addEventListener code below.

Modify the GET request to log the HTTP status code to the console. 

Handle the cases for status codes 200 (OK) and 
404 (Not Found) by displaying appropriate messages.

Have this GET method fire when the 'fetch-json-button-exercise-4' btn 
is clicked.

Display the response in the #output div.
*/

// Exercise 4
const exercise4btn = document.getElementById("fetch-json-button-exercise-4");
exercise4btn.addEventListener("click", () => {
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

Description: 

Copy your existing exercise 3 addEventListener code below.

Add a custom header X-Custom-Header: MyHeaderValue to the request.

Have the event fire when the 'post-data-button-exercise-5' btn is clicked. 

Display the response in the #output div.
*/

// Exercise 5

const exercise5btn = document.getElementById("post-data-button-exercise-5");

exercise5btn.addEventListener("click", () => {
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

Description: 

Copy your existing exercise 1 addEventListener code below.

Modify the GET request to set the 
Accept header to 'application/json' and log the 
response headers to the console.

Have the event fire when the 'fetch-json-button-exercise-6' btn is clicked.
*/

// Exercise 6
const exercise6btn = document.getElementById("fetch-json-button-exercise-6");
exercise6btn.addEventListener("click", () => {
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
Exercise 7: 

Using Try-Catch for Error Handling

Description: 

Copy your existing exercise 2 addEventListener code below.

Wrap the Fetch call inside a try-catch block to handle any exceptions that may be thrown.

Have the event fire when the 'fetch-text-button-exercise-7' btn is clicked.
*/

// Exercise 7
const exercise7btn = document.getElementById("fetch-text-button-exercise-7");
exercise7btn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const text = await response.text();
    outputDiv.textContent = text;
  } catch (error) {
    console.error("Error fetching text:", error);
  }
});

/*
Exercise 8: Handling Network Errors

Description: 

Simulate a network error by making a request to an invalid URL and handle the error gracefully by displaying a message in the #output div.

Have the event fire when the 'fetch-invalid-url-exercise-8' btn is clicked.
*/

// Exercise 8

const exercise8btn = document.getElementById("fetch-invalid-url-exercise-8");
exercise8btn.addEventListener("click", () => {
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

Description: 

Use AbortController to abort a Fetch request when the abort-request-button is clicked. Display a message indicating that the request was aborted.

Have the initial fetch event fire when the 'fetch-request-exercise-9' btn is clicked.

And have the abort event fire when the 'abort-request-button-exercise-9' btn is clicked.

We have provided you with a method, `sleep`, that you can use to delay the return
of your fetch call in time for you to abort it
*/

// Exercise 9

const exercise9abortBtn = document.getElementById(
  "abort-request-button-exercise-9"
);
let controller;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const exercise9btn = document.getElementById("fetch-request-exercise-9");

exercise9btn.addEventListener("click", () => {
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
});

exercise9abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

/*
Exercise 10: Understanding CORS Errors

Description: Make a Fetch request to an API that does not allow cross-origin requests when the cors-request-button is clicked. Observe and log the CORS error.
*/

// Exercise 10
const exercise10btn = document.getElementById(
  "cors-request-button-exercise-10"
);
const safeForCorsWorkUrl = "https://fsn1-speed.hetzner.com/100MB.bin";

exercise10btn.addEventListener("click", () => {
  fetch(safeForCorsWorkUrl)
    .then((response) => response.json())
    .then((data) => {
      exercise10through13Output.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      exercise10through13Output.textContent = "CORS error occurred";
      console.error("CORS error:", error);
    });
});

/*
Exercise 11: Configuring a CORS Request
Description: Modify the request in Exercise 11 to include the mode: 'no-cors' option and observe the changes in the response.
*/

// Exercise 11
const exercise11btn = document.getElementById(
  "cors-request-button-exercise-11"
);
exercise11btn.addEventListener("click", () => {
  fetch(safeForCorsWorkUrl, { mode: "no-cors" })
    .then((response) => {
      exercise10through13Output.textContent = "Request made with no-cors mode";
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 12: Handling Preflight Requests
Description: Make a Fetch request with the method DELETE to an API endpoint, 
and observe the preflight OPTIONS request in the Network tab of your browser's developer tools.
*/

// Exercise 12
const exercise12btn = document.getElementById("preflight-request-exercise-12");
exercise12btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        exercise10through13Output.textContent = "Resource deleted successfully";
      } else {
        exercise10through13Output.textContent = "Failed to delete resource";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 13: Updating the UI Based on HTTP Responses
Description: After successfully fetching data in Exercise 1, update the UI by creating a list of titles from the fetched posts.
*/

// Exercise 13
const exercise13btn = document.getElementById("exercise-13");
exercise13btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      exercise10through13Output.innerHTML = "";
      const ul = document.createElement("ul");
      data.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        ul.appendChild(li);
      });
      exercise10through13Output.appendChild(ul);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});

/*
Exercise 14: Managing a Shopping Cart
Description: Implement functionality to add products to a shopping cart when the buttons 
with class 'add-to-cart-button' are clicked. Update the '#cart-output' div to display the list of product IDs in the cart.
*/

// Exercise 14
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const cartOutput = document.getElementById("cart-output");
let cart = [];

// addToCartButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const productId = button.getAttribute("data-product-id");
//     cart.push(productId);
//     cartOutput.textContent = `Cart: ${cart.join(", ")}`;
//     button.classList.add("added-to-cart");
//     button.textContent = "Added";
//   });
// });

/*
Exercise 15: Persisting Cart Data with Session Storage
Description: Modify Exercise 15 to save the cart data in sessionStorage so that the cart persists across page reloads.
*/

// Exercise 15
// Load cart from sessionStorage
// cart = JSON.parse(sessionStorage.getItem("cart")) || [];
// cartOutput.textContent =
//   cart.length > 0 ? `Cart: ${cart.join(", ")}` : "Cart is empty.";

// addToCartButtons.forEach((button) => {
//   const productId = button.getAttribute("data-product-id");
//   if (cart.includes(productId)) {
//     button.classList.add("added-to-cart");
//     button.textContent = "Added";
//   }
//   button.addEventListener("click", () => {
//     if (!cart.includes(productId)) {
//       cart.push(productId);
//       sessionStorage.setItem("cart", JSON.stringify(cart));
//       cartOutput.textContent = `Cart: ${cart.join(", ")}`;
//       button.classList.add("added-to-cart");
//       button.textContent = "Added";
//     }
//   });
// });

/*
Exercise 16: Handling Malformed JSON Responses
Description: Fetch data from a URL that returns malformed JSON and handle the parsing error using a try-catch block.
*/

// Exercise 16
// fetchJsonButton.addEventListener("click", async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     let text = await response.text();
//     text += "}}";
//     try {
//       const data = JSON.parse(text);
//       outputDiv.textContent = JSON.stringify(data, null, 2);
//     } catch (parseError) {
//       outputDiv.textContent = "Error parsing JSON";
//       console.error("JSON parse error:", parseError);
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// });

/*
Exercise 17: Retrying Failed Requests
Description: Implement a function that retries a failed Fetch request up to 3 times before giving up.
*/

// Exercise 17
// function fetchWithRetry(url, options = {}, retries = 3) {
//   return fetch(url, options).then((response) => {
//     // You can test the failure state by replacing
//     // `!response.ok` below with `true`
//     if (!response.ok) {
//       if (retries > 0) {
//         return fetchWithRetry(url, options, retries - 1);
//       } else {
//         throw new Error("Max retries reached");
//       }
//     }
//     return response.json();
//   });
// }

// fetchJsonButton.addEventListener("click", () => {
//   fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => {
//       outputDiv.textContent = JSON.stringify(data, null, 2);
//     })
//     .catch((error) => {
//       outputDiv.textContent = error.message;
//       console.error("Fetch error:", error);
//     });
// });

/*
Exercise 18: Parallel Requests with Promise.all
Description: Make multiple Fetch requests in parallel to 
https://jsonplaceholder.typicode.com/posts/1 and https://jsonplaceholder.typicode.com/posts/2, and display both responses in the #output div.
*/

// Exercise 18
// fetchJsonButton.addEventListener("click", () => {
//   outputDiv.textContent = "Running Promise.all";
//   Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
//       res.json()
//     ),
//     fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
//       res.json()
//     ),
//     new Promise((resolve) => setTimeout(resolve, 2000)),
//   ])
//     .then(([post1, post2]) => {
//       outputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
//     })
//     .catch((error) => {
//       console.error("Error fetching posts:", error);
//     });
// });

/*
Exercise 19: Chaining Promises for Sequential Requests
Description: Make a Fetch request to get a post, then use data from the response to make another request to get comments for that post. Display the combined data.
*/

// Exercise 19
// fetchJsonButton.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//       return fetch(
//         `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
//       )
//         .then((response) => response.json())
//         .then((comments) => {
//           outputDiv.textContent = JSON.stringify({ post, comments }, null, 2);
//         });
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// });
