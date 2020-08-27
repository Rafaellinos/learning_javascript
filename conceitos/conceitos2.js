/*

//Sem currying

function soma(a, b) {
    return a + b;
}

soma(2,2);
soma(2,3);
soma(2,5);

//Com currying

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2); //parâmetro 2 é memorizado

soma2(2);
soma2(3);
soma2(4);

*/

/*

//Hoisting de variavel
//Levantar ou suspender algo.

function fn () {
    console.log(text);

    var text = 'text';

    console.log(text);

}

fn();


//Nesse caso, o primeiro console logo dará
//undefined, mas a variável text foi 'elevada'
//ficando assim:

function fn () {
    var text;
    console.log(text);

    var text = 'text';

    console.log(text);

}

fn();

*/

/*
//Hoisting de função:
//A função é levanda antes
//ex:

function fn() {
    log('hoisting de func');

    function log(value) {
        console.log(value);
    }
}

fn();

// ficando assim, na prática:

function fn() {
    
    function log(value) {
        console.log(value);
    }
    //// ^^ função içada pelo js
    log('hoisting de func');
    
}

fn();


*/


/*
//Imutabilidade
//Nunca se atualiza um objeto, copia e altera.
//ex:

const user = {
    name: 'Rafael',
    lastname: 'Veloso'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullname: `$(user.name) $(user.lastname)`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);
// out:
// {name:'Rafael',lastname: 'Veloso', fullname: 'Rafael Veloso'} //new obj
// {name: 'Rafael', lastname: 'Veloso'} //user obj
*/