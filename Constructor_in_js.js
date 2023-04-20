function BellBoy(name,age,languages){
    this.name = name;
    this.age= age;
    this.languages = languages;
}

var bellboy1 = new BellBoy('Vaibhav',19,['eng','french']);
var bellboy2 = new BellBoy('sharma',18,['hindi','marathi']);

alert('available bellbois are '+bellboy1.name+' & '+bellboy2.name);
