import saludar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#formSaludador");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fecha = new Date()
  let hora = fecha.getHours();
  div.innerHTML = "<p>"+saludar(nombre, hora)+"</p>"; 
});
