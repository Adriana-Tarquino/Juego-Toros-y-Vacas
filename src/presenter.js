import Juego from "./convertirCodigoSecreto.js";

const codigo_imput = document.querySelector("#codigosecreto");
const form = document.querySelector("#Juego-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#contar");
const Intentos_imput = document.querySelector("#intento");
const form2 = document.querySelector("#Jugador2-form");
const div3 = document.querySelector("#respuesta-div");

const form3 = document.querySelector("#Respuesta-form");
const div4 = document.querySelector("#intentos-div");
const div5 = document.querySelector("#ToroVaca-div");
const jugar = new Juego();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const codigosecreto= jugar.convertirCodigoSecreto(codigo_imput.value);
    const contar = jugar.contarCantidadDeDigitos(codigo_imput.value);
    div.innerHTML = "<p>" + codigosecreto + "</p>";
    div2.innerHTML = "<p>" + "Cantidad de Digitos:" + contar + "</p>";
});

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    const intento2 = Intentos_imput.value;
    div3.innerHTML = "<p>" + intento2 + "</p>";
    const ToroVaca = jugar.juegoToroVaca(codigo_imput.value,Intentos_imput.value);
    const intentos = jugar.intentos;
    div4.innerHTML = "<p>" + intentos;
    div5.innerHTML = "<p>" + "Respuesta:" + ToroVaca + "</p>";

});
