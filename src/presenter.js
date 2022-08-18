//import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#formSaludador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre_Usuario = nombre.value;
  console.log(nombre_Usuario);

  div.innerHTML = "<p>"+"Hola"+nombre_Usuario+"</p>"; 
});
