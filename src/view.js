export const renderItems = (data) => {
  //este codigo renderiza las targetas
  let listadeTarjetas = "";
  data.forEach((content) => {
    listadeTarjetas += `
<li itemscope itemtype="wonderwoman" class="estilo-tarjetas">
<dl itemscope itemtype="wonderwoman">
<dd itemprop="id">${content.id}</dd>
<dd itemprop="name">${content.name}</dd>
<img class="estilo-imagen" src="${content.imageUrl}">
<dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">${content.facts.yearOfBirth}</dd>
<dt>Lugar de nacimiento:</dt><dd itemprop="birthPlace">${content.facts.birthPlace}</dd>
<dt>Descripción:</dt><dd itemprop="mainField">${content.facts.mainField}</dd>
</dl>
</li>`;
  });
  return `<ul itemscope itemtype="wonderwoman" class="lista">${listadeTarjetas}</ul>`;
};
