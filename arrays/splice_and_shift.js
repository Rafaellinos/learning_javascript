

const hobbies = ['Game', 'Study'];

hobbies.push('Reading'); // adiciona novo elemento no array

hobbies.unshift('Coding'); // adiciona novo elemento no começo do array

const poppedEl = hobbies.pop(); // remove o ultimo elemento, retorna o elemento

hobbies.shift(); // remove o primeiro elemento do array, retorna o elemento removido

const hobbies2 = ['Coding', 'Sports']

hobbies2[5] = 'Game'

console.log(hobbies2); 
//retorna ['Coding','Sports',undefined,undefined,undefined,'Game']
// ou ['Coding','Sports', empty x3, 'Game']

hobbies2.splice(0, 0, 'Good Food','More');
/*splice(
    index que deseja começar, 
    quando itens deseja deletar apartir desse item,
    item que será adiciona nesse index,
    ...Mais itens para adicionar*/
hobbies2.splice(0, 1); //deleta o primeiro elemento
hobbies2.splice(-1, 1); //deleta o ultimo elemento
const removedElements = hobbies2.splice(0); //deleta tudo