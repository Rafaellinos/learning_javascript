const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// const sum = 0;
// prices.forEach( (price) => {
//     sum += price;
// });

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0);

/*
    params: função e o primeiro número, ou seja, prevValue na primeira chamada
    da função anônima será 0.

    basicamente passando pela lista e somando o numero anterior com o atual.

    mesma coisa que de cima
*/

console.log(sum);

