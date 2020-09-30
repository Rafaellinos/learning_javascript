let person = {name: 'Rafael'};

const personData = new WeakSet();

persons.set(person, 'Extra info!');

person = null;

console.log(persons);
// mesma coisa que o weakSet, GC depois se setar o obj para null