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
  //return data.sort((item) => item.name[sortBy, sortOrder](value));
};
