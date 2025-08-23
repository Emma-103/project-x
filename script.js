
let cart = [];


const cartItems= document.getElementById("cart-items");
const cartTotal= document.getElementById("cart-total");
const checkoutBtn= document.getElementById("checkout-btn");

function updateCart(){
  cartItems.innerHTML= "";
  localStorage.setItem("cart",JSON,stringify(cart));
  

  cart.forEach(item => {
    const li= document.createElement("li");
    li.textContent= `${item.name} - KES ${item.price}`;
    cartItems.appendChild(li);

  });

  const total= cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent= `Total: KES ${total.toFixed(2)}`;
}
checkoutBtn.addEventListener("click",()=>{
  if(cart.length ===0){
    alert("Your cart is empty!");
   } else{
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
   }
});
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}



