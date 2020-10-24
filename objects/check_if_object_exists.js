
// Verificar se a propriedade existeno objecto
const movie = {
    title: 'BlaBla',
    info: {
        start: 5,
        author: 'John'
    }
};

'info' in movie; // true
'price' in movie; // false
movie.info === undefined; // property does not exist