

let person = {name: 'Max'};

const persons = new WeakSet(); // só funciona com objetos, como Arrays e Objects
persons.add(person);

/*
    Somente guarda objetos.
    Permite que o garbage collector limpe
    os dados no WeakSet
*/

person = null; // deleta no wekSet tbm
// entao o GC (garbage collector) deleta o person no Weakset tbm