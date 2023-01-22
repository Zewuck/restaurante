const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

const contador = document.querySelector(".contador-productos");
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");

button1.addEventListener("click", () => {
  contador.innerHTML++;
});
button2.addEventListener("click", () => {
  contador.innerHTML++;
});

button3.addEventListener("click", () => {
  contador.innerHTML++;
});

button4.addEventListener("click", () => {
  contador.innerHTML++;
});

button5.addEventListener("click", () => {
  contador.innerHTML++;
});

button6.addEventListener("click", () => {
  contador.innerHTML++;
});
