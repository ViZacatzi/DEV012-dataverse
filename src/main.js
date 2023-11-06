import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { estadisticaMujeresLatinas } from "./dataFunctions.js";
import { estadisticaMujeresExtranjeras } from "./dataFunctions.js";

import data from "./data/dataset.js";

//copia de la data original
let dataFiltrada = [...data];

//Llamado de todas las tarjetas de la data
const llamadodeTarjeta = document.querySelector("#root");
llamadodeTarjeta.innerHTML = renderItems(data);

//Filtra por disciplina cuando se seleciona
const selecionar = document.querySelector('select[name="filtroDisciplina"]');

selecionar.addEventListener("change", function () {
  const selecionarDisciplina = selecionar.value;

  dataFiltrada = filterData(data, "mainField", selecionarDisciplina);

  llamadodeTarjeta.innerHTML = renderItems(dataFiltrada);
});

//Filtro acomulativo del filtro por disciplina ordenardo alfabeticamente

const selecionAlfabeticamente = document.querySelector(
  'select[name="alfabeticamente"]'
);

selecionAlfabeticamente.addEventListener("change", function () {
  const selecionarAlfabetica = selecionAlfabeticamente.value;

  dataFiltrada = sortData(dataFiltrada, "name", selecionarAlfabetica);

  llamadodeTarjeta.innerHTML = renderItems(dataFiltrada);
});

//Funcionalidad del botón, cuando se aprieta reinicia la página y las seleciones

const botonClear = document.querySelector('button[name="button-clear"]');

botonClear.addEventListener("click", function () {
  selecionar.value = "seleccion";
  selecionAlfabeticamente.value = "seleccion";
  dataFiltrada = [...data];
  llamadodeTarjeta.innerHTML = renderItems(dataFiltrada);
});

const mujeresLatinas = document.querySelector('label[name="latinas"]');
const mujeresExtranjeras = document.querySelector('label[name="extranjeras"]');

mujeresLatinas.textContent = "Total Mujeres Latinas: " + estadisticaMujeresLatinas(data)
mujeresExtranjeras.textContent = "Total Mujeres Extrangeras: " + estadisticaMujeresExtranjeras(data)
