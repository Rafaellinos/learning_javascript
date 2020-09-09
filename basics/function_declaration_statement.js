

// function declaration / function statement

function multiply (a, b) {
    return a * b;
} // hoisting, nesse caso, irá "içar" a função ao topo

const multiply = function (a, b) {
    return a * b;
} // hoisting nesse caso, irá içar a variavel, mas como undefined