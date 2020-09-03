/*
Primitive Values  vs Reference Values

Primitive:
- String, Numbers, Booleans, null, undefined, Symbol
- Stored in memory (stack), variable stores values itself
- Copies a varible (copie):
    ex:
        let name = 'Max';
        let anotherUser = 'Max';
        name = 'Manual';

        anotherUser === 'Manual'; // true
        name === 'Manual'; // false
        
        Tipo primitivos, não apontam ao
        mesmo lugar na memória.

Reference Values:
all objects
Stored in memory HEAP, stores 
a pointer (adress) to location in memory
Only copies address:
    ex:
        let hobbies = ['Sports'];
        let newHobbies = hobbies;

        hobbies.push('Cooking');

        hobbies === newHobbies // true

        Mesmo lugar na memória.

        para copiar diferente:
            let anotherone = {...person}; 
            
*/