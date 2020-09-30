const data = 'new york;10.99;2000';

const transformaedData = data.split(';');

console.log(transformaedData);

const reTransformData = transformaedData.join(); 
// junta tudo em string com virgual sem parametro
// ou pode usar um seeparador como string vazia ' '

console.log(reTransformData);