
/*
    Pega um elemento dentro de um object e instancia uma variavel.
    O nome da var precisa ser o mesmo da chave.
*/
const movie = {
    title: 'BlaBla',
    info: {
        start: 5,
        author: 'John'
    }
};

const { info } = movie;
const { title: movieTitle } = movies; // extract o title e muda o nome para movieTitle

console.log(info);