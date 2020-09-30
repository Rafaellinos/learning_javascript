/*
    Array: 
        Ordem é garantida.
        Pode conter itens duplicados.
        Pode acessar via index.

    Sets:
        Ordem não é garantida.
        Número duplicados n são permitidos
        Sem acesso via index.

    Maps:
        Key Value, como objects.
        Key pode ser qualquer objeto, até arrays.
        Ordem é garantida.
        Keys duplicadas não são permitidas.
        Acesso via key.
*/


// SETS
const ids1 = new Set(); // unica jeito de criar
const ids = new Set([1, 2, 3]);

ids.has(1); //checa se existe o valor. Nao pode retornar o valor

ids.entries(); // retorna um iterable

ids.delete(3);

// MAPS

const person1 = {name: 'Max'};
const person2 = {name: 'Rafael'}

const personData = new Map([['key', 'some value'], ['key2', 'other key']]);
const personData1 = new Map([person1, [{date: 'yesterday', price: 12}]]);

console.log(personData1);
console.log(personData1.get(person1));

personData1.set(person2, [{date: 'other day', price: 222}]);

for (const person of personData1.entries()) {
    console.log(person);
    // -> [key, value]
};

for (const [key, value] of personData1.entries()) {
    console.log(key, value);
    // -> [key, value]
};

for (const key of personData1.keys()) {
    console.log(key);
};

for (const value of personData1.values()) {
    console.log(value);
};