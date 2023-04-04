alert("!!!!! WELCOME TO LOVE CALCULATOR !!!!!")
prompt('Enter name 1');
prompt('Enter name 2');
var n = Math.random();
n = n*100+1;
n = Math.floor(n);
alert('Your love percentage is '+n+"%");
if(n === 100){
    alert('U R LUCKY');
}
else if (n <100 && n>70){
    alert('good going');
}
else {
    alert('ALL THE BEST BRUHHHH');
}
