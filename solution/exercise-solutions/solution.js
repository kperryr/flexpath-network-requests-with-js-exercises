/*
	Values to use for multiple exercises
*/

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");
const section3OutputDiv = document.getElementById("section-3-output");

/*
	Exercise 1: Making a Simple GET Request with Fetch

	Description: 

	Use the Fetch API to make a GET request to 
	`https://jsonplaceholder.typicode.com/posts/1`
	when the button with ID 'exercise-1-btn' is clicked. 

	Display the response data in the div with ID 'section-1-output'
*/

// Exercise 1
const exercise1btn = document.getElementById("exercise-1-btn");
exercise1btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});

/*
	Exercise 2: Handling Text Responses

	Description: 


  Use the Fetch API to make a GET request to 
	`https://jsonplaceholder.typicode.com/posts/5`
	when the button with ID 'exercise-2-btn' is clicked. 

  During the fetch response chain, convert the response to text,
	and display the result in the #section-1-output div.
	
	
*/

// Exercise 2
const exercise2btn = document.getElementById("exercise-2-btn");
exercise2btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then((response) => response.text())
    .then((text) => {
      section1OutputDiv.textContent = text;
    })
    .catch((error) => {
      console.error("Error fetching text:", error);
    });
});

/*
Exercise 3: Making a POST Request with Fetch

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-3-btn' is clicked.  

Display the response of this POST call in the #section-1-output div.
*/

// Exercise 3
const exercise3btn = document.getElementById("exercise-3-btn");
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
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error posting data:", error);
    });
});

/*
Exercise 4: Understanding HTTP Status Codes

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-4-btn' is clicked. 

Modify the GET request to log the HTTP status code to the console. 

Handle the cases for status codes 200 (OK) and 
404 (Not Found) by displaying appropriate messages.

Display the response in the #section-1-output div.
*/

// Exercise 4
const exercise4btn = document.getElementById("exercise-4-btn");
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
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      section1OutputDiv.textContent = error.message;
      console.error("Error fetching JSON:", error);
    });
});

/*
Exercise 5: Setting Custom HTTP Headers

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-5-btn' is clicked.  

Add a custom header X-Custom-Header: MyHeaderValue to the request.

Display the response in the #section-1-output div.

*/

// Exercise 5

const exercise5btn = document.getElementById("exercise-5-btn");

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
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error posting data:", error);
    });
});

/*
Exercise 6: Content Negotiation with Accept Header

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-6-btn' is clicked. 

Modify the GET request to set the 
'Accept' header to 'application/json' and log the 
response headers to the console.

Display the response data in the div with ID 'section-1-output'

*/

// Exercise 6
const exercise6btn = document.getElementById("exercise-6-btn");
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
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
});

/*
Exercise 7: 

Using Try-Catch for Error Handling

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/5`
when the button with ID 'exercise-7-btn' is clicked. 

During the fetch response chain, convert the response to text.

Using async/await syntax to make this fetch call.

Wrap the Fetch call inside a try-catch block to handle any exceptions 
that may be thrown.

Display the result in the #section-1-output div.

*/

// Exercise 7
const exercise7btn = document.getElementById("exercise-7-btn");
exercise7btn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const text = await response.text();
    section1OutputDiv.textContent = text;
  } catch (error) {
    console.error("Error fetching text:", error);
  }
});

/*
Exercise 8: Handling Network Errors

Description: 

Simulate a network error by making a request to an invalid URL and 
handle the error gracefully by displaying a message in the 
#section-1-output div.

Have the request fire when the 'exercise-8-btn' btn is clicked.
*/

// Exercise 8

const exercise8btn = document.getElementById("exercise-8-btn");
exercise8btn.addEventListener("click", () => {
  fetch("https://invalid-url")
    .then((response) => response.json())
    .then((data) => {
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      section1OutputDiv.textContent = "Network error occurred";
      console.error("Network error:", error);
    });
});

/*
Exercise 9: Aborting a Fetch Request

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-9-btn' is clicked. 

Use AbortController to abort the Fetch request when the #exercise-9-abort-btn 
is clicked. 

Display a message in #section-1-output indicating that the request was aborted.

We have provided you with a method, `sleep`, that you can use to delay 
the return of your fetch call in time for you to abort it
*/

// Exercise 9

const exercise9abortBtn = document.getElementById("exercise-9-abort-btn");
let controller;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const exercise9btn = document.getElementById("exercise-9-fetch-btn");

exercise9btn.addEventListener("click", () => {
  controller = new AbortController();

  sleep(5000).then(() =>
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        section1OutputDiv.textContent = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          section1OutputDiv.textContent = "Fetch request was aborted";
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

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-10-btn is clicked. Observe and log the CORS error out to 
#section-2-output.

*/

// Exercise 10
const exercise10btn = document.getElementById("exercise-10-btn");
const safeForCorsWorkUrl = "https://fsn1-speed.hetzner.com/100MB.bin";

exercise10btn.addEventListener("click", () => {
  fetch(safeForCorsWorkUrl)
    .then((response) => response.json())
    .then((data) => {
      section2OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      section2OutputDiv.textContent = "CORS error occurred";
      console.error("CORS error:", error);
    });
});

/*
Exercise 11: Configuring a CORS Request

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-11-btn is clicked. 

Modify the request to include the mode: 'no-cors' option and observe the 
changes in the response.
*/

// Exercise 11
const exercise11btn = document.getElementById("exercise-11-btn");
exercise11btn.addEventListener("click", () => {
  fetch(safeForCorsWorkUrl, { mode: "no-cors" })
    .then((response) => {
      section2OutputDiv.textContent = "Request made with no-cors mode";
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 12: Handling Preflight Requests

Description: 

Make a Fetch request with the method DELETE to the api endpoint:
`https://jsonplaceholder.typicode.com/posts/1` 
and observe the preflight OPTIONS request in the Network tab of your 
browser's developer tools.

Fire this fetch request when the #exercise-12-btn is clicked.
*/

// Exercise 12
const exercise12btn = document.getElementById("exercise-12-btn");
exercise12btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        section2OutputDiv.textContent = "Resource deleted successfully";
      } else {
        section2OutputDiv.textContent = "Failed to delete resource";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

/*
Exercise 13: Updating the UI Based on HTTP Responses

Description: 


Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/`
when the button with ID 'exercise-13-btn' is clicked. 

Update the UI by creating a list of titles from the fetched posts and display
them in #section-2-output

*/

// Exercise 13
const exercise13btn = document.getElementById("exercise-13-btn");
exercise13btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => {
      section2OutputDiv.innerHTML = "";
      const ul = document.createElement("ul");
      data.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        ul.appendChild(li);
      });
      section2OutputDiv.appendChild(ul);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});

/*
Exercise 14: Managing a Shopping Cart

Description: 

Implement functionality to add product ids to a shopping cart array when 
the buttons with class 'add-to-cart-button' are clicked. 

Rely on the buttons `data-product-id` html attributes to grab their product IDs

Display the list of product IDs in the #section-3-output div.
*/

// Exercise 14
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

// Exercise 14 - Answer in comment below
/*
let cart = [];

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product-id");
    cart.push(productId);
    section3OutputDiv.textContent = `Cart: ${cart.join(", ")}`;
    button.classList.add("added-to-cart");
    button.textContent = "Added";
  });
});
*/

/*
Exercise 15: Persisting Cart Data with Session Storage

Description: 

Modify Exercise 15 to save the cart data in sessionStorage so that the 
cart persists across page reloads.
*/

// Exercise 15
// Load cart from sessionStorage
cart = JSON.parse(sessionStorage.getItem("cart")) || [];
section3OutputDiv.textContent =
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
      section3OutputDiv.textContent = `Cart: ${cart.join(", ")}`;
      button.classList.add("added-to-cart");
      button.textContent = "Added";
    }
  });
});
