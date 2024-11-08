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
