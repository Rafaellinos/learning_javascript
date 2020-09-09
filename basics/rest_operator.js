
//rest operator
const sumUp = (...numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};

console.log(sumUp(1 ,5, 10, -3, 6, 10));
console.log(sumUp(1 ,5, 10, -3, 6, 10, 25, 88));

// rest operator deve sempre estar no final
const sumUp = (a, b, c=2,...numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};

/// arguments só pode ser usado em functions
// e funciona como o rest operator
const sumUp = function () {
    let sum = 0;
    for (const number of arguments) { //nao use
        sum += number;
    }
    return sum;
};