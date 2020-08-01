// filled the memory heap

let array = [];

for (let i = 2; i > 1; i ++){
    array.push(i*1)
}

// stack overflow

function inception () {
    inception()
}
inception()



