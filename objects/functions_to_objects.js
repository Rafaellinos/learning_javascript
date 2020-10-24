/*
é possível atribuir uma função a um objecto sem precisar
escrever function ou usar array funcion com:
*/

const movie = {
    title: 'Dawn of the dead',
    stars: '5/5',
    getFormatedTitle() { // mesma coisa que: getFormatedTitle: function () ...
        return this.title.toLocaleUpperCase();
    }
}