/*
modos de criar Arrays!
*/


const numbers = [1,2,3]; // melhor performance

console.log(numbers);

const moreNumbers = new Array('Hi!', 'Welcome'); // usando constructor
console.log(moreNumbers);

const moreMoreNumbers = new Array(5); // retorna -> [empty x 5], 5 undefined
// pode ser const newArray = Array(5)

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers); // retorna [1,2]

// transforma um iterable ou um array-like em um array, exemplo: node list (ul+li)
const moreMoreMoreNumber = Array.from("hi!");
console.log(moreMoreMoreNumber); // retorna ["h","i","!"]

   