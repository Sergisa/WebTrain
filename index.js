document.getElementById('open_modal').onclick = function(){
    document.getElementById('main_modal').style.display = "block";
    return false;
};
function close_modal(modal){
    modal.style.display = "none";
}
document.getElementById('close_modal').onclick = function(){
    close_modal(document.getElementById('main_modal'));
}
document.getElementById('main_modal').onclick = function(){
    close_modal(document.getElementById('main_modal'));
}