// Seleccionar elementos del DOM
const color = document.getElementById("color");
const boton = document.querySelector("button");

function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener('click', function (){
  let colorAleatorio = generarColorHexAleatorio();
  //Actualizar el texto.
  color.textContent = colorAleatorio;
  // Actualizar el color del fondo.
  document.body.style.backgroundColor = colorAleatorio 
}); 