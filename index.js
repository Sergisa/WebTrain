document.getElementById('simple_button').addEventListener('click', function(e){
    console.log(e);
});
document.getElementById('submitting_stopped_button').onclick = function(e){
    console.log("simple clicking");
    return false;
};