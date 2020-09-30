
// buscar obj em lista de objs
const personData = [{nome: 'Rafael'}, {nome: 'Yasmin'}]

console.log(personData);

const yasmin = personData.find(
    (person, index, persons) => {
    console.log('person: ', person);
    console.log('index: ', index);
    console.log('persons: ', persons)
    return person.nome === 'Yasmin'; 
});
/*
    Primeiro arg: item,
    Segundo arg: index,
    Terceiro arg: arrays inteira,

    A função deve retornar um objeto find
*/

console.log(yasmin);

const rafael = personData.findIndex(
    (person, index, persons) => {
    return person.nome === 'Rafael'; 
}); //find by array

console.log(rafael)


///////////

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

for (const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax))
}

console.log(taxAdjustedPrices);

prices.forEach( (value, index, array) => {
    const priceObj = {index: index, taxAdjPrice: value * (1 + tax)};
    taxAdjustedPrices.push(priceObj);

})

console.log(taxAdjustedPrices);


