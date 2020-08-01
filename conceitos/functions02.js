(() => {
this.name = "nome";

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'nome do objeto'
}

console.log(user.getName());
console.log(user.getNameArrowFn());

/*
    o GetName() irá retornar o atributo
    do contexto do objeto. ou seja, user.getName() retorna 'nome do objeto',
    
    O GetNameArrowFn() irá retornar 'nome', pois o this se refere
    ao bloco que a função se encontra, e não ao objeto em sí.
*/
})();