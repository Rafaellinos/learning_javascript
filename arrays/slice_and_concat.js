

const testResults = [1,2,4.5,2.3,10.99]

console.log(testResults.slice()); //slice retorna uma nova Array

const twoElementsOfArray = testResults.slice(0,2);
// retorna nova array baseada no testeResults do 0 ao 2, ou seja, [1,2]
const getReversingArray = testResults.slice(-3, -1);
// retorna [4.5,2.3]

// concat()

const storedResults = testResults.concat([1,2,3],[5,6,7]); 
// cria nova array com as passadas por parâmetro

console.log(testResults.indexOf(1.5)) //retorna o index do elemento
// se repetido, retorna o primeiro index do primeiro elemento encontrado
// pode ser usado apartir de um index indexOf(1.5)

console.log(testResults.lastIndexOf(1.5)) // retorna o index, procurando apartir do ultimo

const personDatra = [{name: 'Max',}, {name: 'Manuel'}]
console.log(testResults.indexOf({name: 'Manuel'}))
// nao funciona por motvios óbvios, a localização do objeto em memória é diferente
