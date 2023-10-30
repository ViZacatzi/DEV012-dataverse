// Esta funcion filtra la data por disciplina, se utiliza además la funcion .includes, porque la data contiene hasta más de una disciplina

export const filterData = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

// export const sortData = (data, sortBy, sortOrder) => {
//if (sortOrder === "ascendente"){
//return data.sort((a,b) =>
  //  a[sortBy] - b[sortBy]);
 // } else (sortOrder === "descendete"){
   // return data.sort((a,b) =>
   // b[sortBy] - a[sortBy]);
  //}
//return data.sort((item) => item.name[sortBy, sortOrder](value));
//};

