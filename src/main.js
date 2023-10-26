import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

console.log(example, renderItems(data), data);

const llamadodeTarjeta = document.querySelector("#root");

llamadodeTarjeta.innerHTML = renderItems(data);


const selecionar = document.querySelector('select[name="filtros"]');

selecionar.addEventListener("change", function () {
  //selecionar.textContent = dataFunction.example;
  alert("hola");

});
const div = document.querySelector("#root");

div.innerHTML = renderItems(data);
