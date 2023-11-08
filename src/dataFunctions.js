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
    const regex = /méxico|chile|guatemala/gi;
    const coincidenciasLatinas = lugarDeNacimiento.match(regex);
    if (coincidenciasLatinas) {
      resultado = resultado + 1;
    }
    return resultado;
  }, 0);

  return conteoMujeresLatinas;
};

//Esta función devolvera total de mujeres extrangeras
export const estadisticaMujeresExtranjeras = (data) => {
  
  const conteoMujeresExtranjeras = data.reduce((resultado, mujeres) => {
    const lugarDeNacimiento = mujeres.facts.birthPlace.toLowerCase();
    const regex =
      /Inglaterra|Macedonia|EE. UU.|Reino Unido|Polonia|Francia|Egipto|Escocia/gi;
    const coincidenciasExtranjeras = lugarDeNacimiento.match(regex);
    if (coincidenciasExtranjeras) {
      resultado = resultado + 1;
    }
    return resultado;
  }, 0);

  return conteoMujeresExtranjeras;
};
