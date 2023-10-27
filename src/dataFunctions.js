// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterdata = (data, filterBy) => {
  const filosofa = data.filter((element)=>{
return element[filterBy].includes('matematica')
  })
  return filosofa;
};

export const anotherExample = () => {
  return [];
};
