/*
Compara valor ou tipo e valor


'1' == 1 => True
'1' === 1 => False
*/

/*
!var = check if NOT True
*/

/*
//comparar objetos:

let objeto1 = {
    name: 'Max'
}
let objeto2 = {
    name: 'Max'
}

objeto1 === objeto2 => false
objeto1 == objeto2 => false

const objeto3 = objeto1;
objeto1 === objeto3 => true

*/

/*
js converte string para bool
Truthy e Falsy
ex:

const teste = '';
if (teste) {
    console.log('True')
} else {
    console.log('False')
}
output = > True

Se o teste tiver um string com qualquer,
o valor será True

{}, [] e todos os outros objetos são tratados
SEMPRE como true, independente se o array/object
contém valores ou nao.
*/