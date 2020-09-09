/*
Simplesmente passar uma função como
parâmetro para outra, assim, podendo
ser executada em outro lugar.
*/

const sumUp = (resultHandler, ...numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return resultHandler(sum);
};

const showResult = (result) => {
    alert(`the result: ${result}`);
};

console.log(sumUp(showResult, 1 ,5, 10, -3, 6, 10));