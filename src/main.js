import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { anotherExample } from "./dataFunctions.js";

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

