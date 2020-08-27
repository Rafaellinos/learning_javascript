var idade = prompt("qual sua idade?"); //iqual to input in python

if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}

//////////

var count = 0;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++;
};

for(let count=0; count<=5; count++){
    alert(count);
};

var d = new Date(); //data de hoje
alert(d.getDate()); // pode usar getMinutes,getMounth etc
