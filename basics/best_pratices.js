//avoid global variables

var a = 1;
var b = 1;
var c = 1;

//avoid Event listeners
//because they keep there
//even if u dont remove them

var element = document.getElementById('button');
element.addEventListener('click', onClick);

//setInterval
setInterval( () => {
    //referencing objects
})