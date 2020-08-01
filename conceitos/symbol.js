const symbol1 = Symbol();
const symbol2 = Symbol();

console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//symbol permite que as propriedades n sejam sobreescritas
//além disso n permite enumberables

//usado como se fosse um modificador de acesso private.

Object.getOwnPropertySymbols(user); //pega todos os symbols
Reflect.ownKeys(user);