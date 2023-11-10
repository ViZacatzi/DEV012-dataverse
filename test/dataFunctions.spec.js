import { data as fakeData } from "./data.js";
import { filterData } from "../src/dataFunctions.js";
import { sortData } from "../src/dataFunctions.js";
import { resultadoFakeDataDesc } from "./data.js";
import { resultadoFakeDataAsc } from "./data.js";
import { estadisticaMujeresLatinas } from "../src/dataFunctions.js";
import { estadisticaMujeresExtranjeras } from "../src/dataFunctions.js";

describe("filterData", () => {
  it("La data se filtrara por el campo de estudio Artista", () => {
    const artistas = filterData(fakeData, "mainField", "Artista");
    expect(artistas.length).toBe(3);
  });

  it("La data se filtrara por el campo de estudio Escritora", () => {
    const artistas = filterData(fakeData, "mainField", "Escritora");
    expect(artistas.length).toBe(4);
  });
});

describe("sortData", () => {
  it("Devuelve la data ordenada de forma Ascendente", () => {
    const dataOrdenadaAscendente = sortData(fakeData, "name", "asc");
    expect(dataOrdenadaAscendente).toEqual(resultadoFakeDataAsc);
  });

  it("Devuelve la data ordenada de forma Descendente", () => {
    const dataOrdenadaDescendente = sortData(fakeData, "name", "des");
    expect(dataOrdenadaDescendente).toEqual(resultadoFakeDataDesc);
  });
});

describe("estadisticaMujeresLatinas", () => {
  it("Devuelve la cantidad de mujeres latinas en el arrive", () => {
    const mujeresLatinas = estadisticaMujeresLatinas(fakeData);
    expect(mujeresLatinas).toBe(1);
  });
});

describe("estadisticaMujeresExtranjeras", () => {
  it("Devuelve la cantidad de mujeres extrangeras en el arrive", () => {
    const mujeresExtrangeras = estadisticaMujeresExtranjeras(fakeData);
    expect(mujeresExtrangeras).toBe(6);
  });
});
