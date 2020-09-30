

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

/*
    retorna uma lista para cada obj
*/

const taxAjustedPrices = prices.map( (value, index, array) => {
    const priceObj = {index: index, taxAdjPrice: value * (1 + tax)};
    return priceObj;
})


console.log(taxAjustedPrices);
console.log(prices);