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
