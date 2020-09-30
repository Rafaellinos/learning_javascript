
/*
    Retorna verdadeiro ou falso, dependendo da lógia.
    se retornar True, o elemento será adiciona no array,
    se não, ele não será adicionado.
*/
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const filteredArray = prices.filter( p => p > 6); // retorna price maior que 6

console.log(filteredArray);