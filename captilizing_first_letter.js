var name = prompt('what is ur name');
var firstchar = name.slice(0,1);
var upcasefirst = firstchar.toUpperCase();
var restname = name.slice(1,name.length);
alert(upcasefirst + restname);
