function fn() {
    return 'teste';
}

const arrowfn = () => 'teste'; //mesma coida que em cima
const arrowfn = () => {
    return 'teste'; // se tiver mais de uma expressão, coloque o return explicito
}

//funções tbm são objetos

fn.prop = 'posso criar pripriedade';

console.log(fn());
console.log(fn.prop);

//receber parâmetros

const logValue = value => console.log(value);
const logFnResult = value => console.log(fnParam());

//receber e retornar funções

const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
};