
/*
É possível colocar um label em uma loop,
e assim, especificar o continue/break com o label.

Ex de label outerWhile e innerFor.
*/

let j = 3;
outerWhile: do {
    console.log('outher', j);
    innerFor: for (let k = 0; k < 5; k++){
        if (k === 3) {
            break outerWhile;
        }
        console.log('inner',k)
    }
    j++;
} while (j < 3);