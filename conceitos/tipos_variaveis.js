/*
Sempre que tiver {}, é um escopo.
// fora, escopo global
{
    // escopo de bloco
}
function test() {
    // escopo de func
}

// escopo global no browser = window.VAR

var = Não respeita escopo de bloco (de ifs por exemplo).
Só entende escopo de func e global.

let = Respeita escopo de bloco.

const = Respeita escopo de bloco.
Não pode apontar para outra coisa.
Ex: const test = [1,2,3];
    test = [4,5,7]; //ERRO

*/
