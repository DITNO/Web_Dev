function movesuitcase(){
    alert('Moving suit case');
}

function workdone(){
    alert('workdone');
}

function BellBoy(name,age,languages){
    this.name = name;
    this.age= age;
    this.languages = languages;
    this.pickupbags = function(){
        alert('starting work');
        movesuitcase();
        workdone();
    }
}

//execution statements
var bellboy1 = new BellBoy('Vaibhav',19,['eng','french']);
bellboy1.pickupbags();
