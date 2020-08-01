/*
Nomes: Moca/Livescript e depois Javascript.
Lançado em Set 1995.
Brendan Eich

/// ECMAScript
Especificação da linguagem (começou em 1996).
Quem cuida da especificação? TC39

Propostas: Stage 0,1,2,3 e 4.
Tem responsável e campeão. 

Stage 0: strawman
Membro ou contribuidor registrado no TC39.
Submete documento e que seja revisado.

Stage 1: proposal
Tem campeão(s).
Exemplos e bem descrito.
Alterações.

Stage 2: draft
Primeira versão da proposta.
Sintaxe semantica.

Stage 3: candidate
Quase finalizada.
Exige feedback de implementação.
Pelo menos duas implementações.

Stage 4: finished
Testes.
Experiência prática.
Assinatura do editor do TC39.


//ES2018 última especificação
//ES.NEXT futuras implementações

Babel é um compilador de JS.
Pega uma versão nova e transforma em uma antiga,
compatível com outros browsers.
De uma implementação nova, para uma antiga.
*/

/*
JavaScript é interpretado.
Linguagem de tipagem fraca e dinâmica.

Tipagem fraca: por exemplo, somar uma string a um inteiro
sem que ocorra um erro de tipo.

Dinâmica, n precisa dizer qual o tipo da variavel ao cria-la.

*/

/*
Typescript 
É um superset do Javascript, permitindo, por exemplo,
adicionar tipos de variaveis em tempo de desenvolvimento.
ex: Generics, type functions, enum etc
*/

/*
Flow
Não é um superset, mas verifica tipagem, por exemplo.
*/


/*
Funções de primeira classe e ordem maior
pode atribuir a função para uma variavel,
para um estrutura de dados e até passar
por parâmetro. pode retornar tbm.
*/

/*
Closure ou escopo léxico.

Capacidade de uma função lembrar do ambiente
em que ela foi criada.
ex: 

function b(){
    let minhaVar;
}
function a() {
    let minhaVar=2;
    b();
}

let minhaVar = 1;
a();

//No caso acima, a variavel é criada 
//no escopo local, n acessando as vars
//criadas em outros escopos.

ex2:

function init(){
    const exemplo = 'variavel';

    return function () {
        console.log('1');
        return function() {
            console.log('2');
            return function () {
                console.log('3');
            }
        }
    }
}

init()()()(); // chamando cada função por vex
//ou
fun1 = init();
fun2 = fun1();
fun3 = fun2();
fun3();

*/