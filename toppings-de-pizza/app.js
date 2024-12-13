const toppings = document.getElementsByClassName("topping");

function mostrarClic(topping) {
  console.log(topping.target.innerText);
}

for (const topping of toppings) {
  topping.addEventListener("click", mostrarClic);
}
 