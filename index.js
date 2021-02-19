Array.prototype.shuffle = function(){
    this.sort(() => Math.random() - 0.5);
}
var array = [
    "first",
    "second",
    "third",
    "fourth"
]
document.getElementById('comand').onclick = function(){
    array.shuffle();
    document.getElementById("wrapping").innerHTML = array.toString().replaceAll(',', ', ');
}