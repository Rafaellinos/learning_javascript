

/*
 JS converte automaticamente keys em strings,
 pode ser qualquer coisa, numero, funcao etc
*/

const dynamicVar = 'level';

let person = {
    'first name': 'Max',
    age: 30,
    [dynamicVar]: 11, // atribuir dinamicamente
    hobbies: ['Sports', 'Cooking'],
    greet: function(){
        alert('hello');
    },
    1.5: 'hello'
};


// acessar propriedades
// possivel acessar nomes de propriedades com []
person.age;
//or
person['first name'];
person[1.5];

//ex real => document.querySelector('#movie-list').style['background-color'] = 'red';

/*
    JS mantém a ordem dos objetos sempre que houver strins e/ou variaveis como keys
    Se forem apenas numeros, JS ira dar sort nas keys automaticamente
*/


