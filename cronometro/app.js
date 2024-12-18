const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
  }
  if (minutos / 60 === 1) {
    minutos = 0;
    horas++;
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

botonInicioPausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    estiloPausarCronometro();
    estadoCronometro = "iniciado";
  } else {
    window.clearInterval(intervaloDeTiempo);
    estiloIniciarCronometro();
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", function () {
  window.clearInterval(intervaloDeTiempo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  //Reiniciar
  cronometro.innerText = "00:00:00";

  //Actualizar botones
  estiloIniciarCronometro();

  //Estado
  estadoCronometro = "pausado";
});

function estiloPausarCronometro() {
  botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
  botonInicioPausa.classList.remove("iniciar");
  botonInicioPausa.classList.add("pausar");
}

function estiloIniciarCronometro() {
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");
}

//Función para asignar el formato de dos dígitos a las unidades de tiempo
function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? `0${unidadDeTiempo}` : unidadDeTiempo;
}
