/*
    Objects: 
        Primitive Values:
            numbers, strings, booleans,
            null, undfiend e Symbol
        
        Reference Values:
            {}, Arrays, Dom Nodes,
            etc
*/

//delete:

const person = {
    name: 'Rafael',
    age: 29,
    hobbies: ['Play', 'Code']
};
const [firstName, lastName, ...lastInformation] = nameData;
delete person.age;
//or
person.age = undefined; 
// atribuir undefiend má prática, nunca se atribui nada, tbm não elimina o age do objeto

// add

person.isAdmin = true;
