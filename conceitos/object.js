let user = {
    name: 'Rafael'
};

user.name = "outro nome1";
user['name'] = 'outro nome2';

const prop = 'name';
user[prop] = 'outr nome3';

user.lastName = 'Veloso';
//modificar propriedades

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user)); 
// retorna array de arrays contendo
// os atributos: ex: [[chave,valor],[chave,valor]]

console.log(Object.assign(user,{fullName: 'Rafael Veloso'}))// modifica o objeto
//merge object

console.log(Object.assign({},user,{fullName: 'Rafael Veloso'}))
// merge e cria uma nova, imutabilidade

Object.freeze(user);
//não consegue modificar o objeto de jeito nenhum
//congela todo obj

Object.seal(user);
//não permite que crie ou delete
//pode editar a propriedade.
