/*

*/
// ex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const secondDict = { e: 7, f: 90}
const returnedTarget = Object.assign(target, source, secondDict);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5, e: 7, f: 90}

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5, e: 7, f: 90 }