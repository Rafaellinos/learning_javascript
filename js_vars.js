function start() { 
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // vai subir erro, pq let respeita escopo de brakets
    // se trocar para var, esse erro n irá mais acontecer.
}

start();

// var respeita bloco de função, mas não de ifs/fors
 
// var => function-scoped
// let, const => block-scoped

//var não funciona no window object