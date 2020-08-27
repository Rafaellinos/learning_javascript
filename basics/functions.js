// redirect
// onclick
function redirect () {
    window.open("http://google.com.br"); // 
    window.location.href = "http://google.com.br"; //same windows
}


//onmouseover(this);
function change_txt (element) {
    //alert("blabla");
    //document.getElementById("element").innerHTML = "new text";
    element.innerHTML = "new text";
}

//onmouseout(this)
function change_back (element) {
    //document.getElementById("element").innerHTML = "old text";
    element.innerHTML = "old text";
}

//onload <body onload="load()">
function load() {
    alert("page loaded");
}


//onchange
/*
    <select onchange="onchange_select(this)">
        <option value="1">valor 1 </option>
        <option value="2">valor 2 </option>
        <option value="3">valor 3 </option>
    </select>
*/
function onchange_select(element){
    console.log(element.value);
}