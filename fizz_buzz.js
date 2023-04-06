var output =[];
var count =1;
function buzz(){
    if(count%5===0){
        output.push('buzz');
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}
