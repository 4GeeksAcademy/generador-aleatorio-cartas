import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Generador de Cartas Aleatorios ");

//Arrays
const cartasPalos = ["♦","♥", "♠", "♣"];
const valoresDeCarta = ["A",2,3,4,5,6,7,8,9,"K","Q","J"];

//Funcion generadora random
function signoRamdon (lista){
let elementoAleatorio = Math.floor(Math.random() * lista.length);
return lista[elementoAleatorio]
}
//Asignaciones
const firts_Icon = document.querySelector("#firts_Icon");
const paloAleatorio = signoRamdon(cartasPalos);
firts_Icon.textContent = paloAleatorio;

const second_Icon = document.querySelector("#Second_Icon");
second_Icon.textContent = paloAleatorio;

const number = document.querySelector("#number");
const numberAleatorio = signoRamdon(valoresDeCarta);
number.textContent = numberAleatorio;

if (paloAleatorio == "♦" || paloAleatorio == "♥"){
  firts_Icon.style.color = "red"
  second_Icon.style.color = "red"
}

function cambioDeTamañoCard () {
  const valorDeIngreso = document.querySelector("#Tamaño-Cartas").value
  if(
    valorDeIngreso.endsWith("px")) {
    document.querySelector("#cartaPrincipal").style.width = valorDeIngreso;
    document.querySelector("#cartaPrincipal").style.height = valorDeIngreso;
  } else {
    alert("El valor necesita terminar en px para ser valido. Vuelve a intentar")
  };
}
function cambioDeTamañoIconos () {
  const valorDeIngreso = document.querySelector("#Tamaño-iconos").value
  if(
    valorDeIngreso.endsWith("px")) {
    document.querySelector("#firts_Icon").style.fontSize = valorDeIngreso;
    document.querySelector("#number").style.fontSize = valorDeIngreso;
    document.querySelector("#Second_Icon").style.fontSize = valorDeIngreso;
  } else {
    alert("El valor necesita terminar en px para ser valido. Vuelve a intentar")
  };
}
const botonPrincipal = document.querySelector("#Boton-Principal");
botonPrincipal.addEventListener("click",cambioDeTamañoCard);
botonPrincipal.addEventListener("click", cambioDeTamañoIconos);

}










