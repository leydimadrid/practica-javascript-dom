const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const textored = document.getElementById("texto-red");
const textogreen = document.getElementById("texto-green");
const textoblue = document.getElementById("texto-blue");

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

//Actualizar el texto de los párrafos
textored.innerText = red;
textogreen.innerText = green;
textoblue.innerText = blue;

function actualizarColor(red, green, blue) {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = colorRGB;
}

//Actualizar red
inputRed.addEventListener("change", (e) => {
  red = e.target.value;
  textored.innerText = red;
  actualizarColor(red, green, blue);
});

//Actualizar green
inputGreen.addEventListener("change", (e) => {
  green = e.target.value;
  textogreen.innerText = green;
  actualizarColor(red, green, blue);
});

//Actualizar blue
inputBlue.addEventListener("change", (e) => {
  blue = e.target.value;
  textoblue.innerText = blue;
  actualizarColor(red, green, blue);
});
