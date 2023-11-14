// Esta funcion filtra la data por disciplina, se utiliza además la funcion .includes, porque la data contiene hasta más de una disciplina

export const filterData = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

export const sortData = (data, sortBy, sortOrder) => {
  //console.log(data, sortBy, sortOrder);
  if (sortOrder === "asc") {
    return [...data].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  } else {
    sortOrder === "desc";
    return [...data].sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
};

//Esta función devolvera total de mujeres latinas

export const estadisticaMujeresLatinas = (data) => {
  const conteoMujeresLatinas = data.reduce((resultado, mujeres) => {
    const lugarDeNacimiento = mujeres.facts.birthPlace.toLowerCase();
    const regex = /México|Chile|Guatemala/gi;
    const coincidenciasLatinas = lugarDeNacimiento.match(regex);
    if (coincidenciasLatinas) {
      resultado = resultado + 1;
    }
    return Number(resultado);
  }, 0);

  return conteoMujeresLatinas;
};

//Esta función devolvera total de mujeres extrangeras
export const estadisticaMujeresExtranjeras = (data) => {
  const conteoMujeresExtrangeras = data.reduce((resultado, mujeres) => {
    const lugarDeNacimiento = mujeres.facts.birthPlace.toLowerCase();
    const regex =
      /Inglaterra|Macedonia|EE. UU.|Reino Unido|Polonia|Francia|Egipto|Escocia/gi;
    const coincidenciasExtrangeras = lugarDeNacimiento.match(regex);
    if (coincidenciasExtrangeras) {
      resultado = resultado + 1;
    }
    return Number(resultado);
  }, 0);

  return conteoMujeresExtrangeras;
};

export const mujeres = (data) => {
  return data.map((item) => item.facts["birthPlace"]);
};
