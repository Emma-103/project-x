// Load cart data from localStorage (saved in script.js)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

// Show cart on checkout page
function displayCheckoutCart() {
  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    checkoutItems.appendChild(li);
    total += item.price;
  });

  checkoutTotal.textContent = `Total: $${total}`;
}

displayCheckoutCart();

// Handle checkout form
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const payment = document.getElementById("payment").value;

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Show confirmation
  alert(`✅ Thank you ${name}! Your order has been placed.\n
📦 Shipping to: ${address}\n
📧 Confirmation sent to: ${email}\n
💳 Payment method: ${payment}`);

  // Clear cart
  cart = [];
  localStorage.removeItem("cart");
  displayCheckoutCart();

  // Optionally redirect to home page
  // window.location.href = "index.html";
});
