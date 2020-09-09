/*
bind serve para adicionar pré variaveis a uma função,
sem executalas. 

Bind concatena parametros, portanto, sempre por ordem
o primeiro.

Ex:

*/

const calculate = (func, operation = 'ADD', ...numbers) => {

    let sum = 0;
    for (const number of numbers) {
        if (operation === 'ADD') {
            sum += number;
        } else if (operation === 'SUBTRACT') {
            sum -= number;
        }
    }
    return func(sum);
};

const showResult = (message, result) => {
    console.log(message + ' ' + result);
};

calculate(showResult.bind(this, 'The result of this addition is: '), 'ADD', 3,4,5);
calculate(showResult.bind(this, 'The result of this subtraction is: '), 'SUBTRACT', 3,4,5);