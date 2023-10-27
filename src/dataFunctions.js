// Esta funcion filtra la data por disciplina, se utiliza además la funcion .includes, porque la data contiene hasta más de una disciplina

export const filterData = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

export const anotherExample = () => {
  return [];
};
