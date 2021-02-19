function shuffleArray(array){
    return array.sort(() => Math.random() - 0.5);
}
var array = [
    "first",
    "second",
    "third",
    "fourth"
]
document.getElementById('comand').onclick = function(){
    array = shuffleArray(array);
    document.getElementById("wrapping").innerHTML = array.toString().replaceAll(',', ', ');
}