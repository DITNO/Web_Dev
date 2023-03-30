
var essay = prompt('enter ur tweet');
var a = essay.length;
var b = 140- a;
alert('you have written'+' '+a+''+'and left with '+ b);
alert(essay.slice(0,140));
