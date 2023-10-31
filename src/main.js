import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";

import data from "./data/dataset.js";

//console.log(example, renderItems(data), data);

const llamadodeTarjeta = document.querySelector("#root");

llamadodeTarjeta.innerHTML = renderItems(data);

const selecionar = document.querySelector('select[name="filtroDisciplina"]');

selecionar.addEventListener("change", function () {
  const selecionarDisciplina = selecionar.value;

  const filtroPorDisciplina = filterData(
    data,
    "mainField",
    selecionarDisciplina
  );
  llamadodeTarjeta.innerHTML = renderItems(filtroPorDisciplina);
});


const selecionAlfabeticamente = document.querySelector('select[name="alfabeticamente"]');

selecionAlfabeticamente.addEventListener("change", function () {
  //alert("hola")
  const selecionarAlfabetica = selecionAlfabeticamente.value;

  const filtrarAlfabetica = sortData(
    data,
    "name",
    selecionarAlfabetica
  );
  console.log(filtrarAlfabetica)
  llamadodeTarjeta.innerHTML = renderItems(filtrarAlfabetica);
}); 

const botonClear = document.querySelector('button["button-clear"]');

botonClear.addEventListener("click", function () {
 console.log(botonClear)
  //llamadodeTarjeta.innerHTML = renderItems(data);
});