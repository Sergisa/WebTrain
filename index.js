<<<<<<< Updated upstream
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
=======
function closeModal(){
  document.getElementById('main_overlay').style.display='none';
}
function openModal(){
  document.getElementById('main_overlay').style.display='flex';
}
document.getElementById('main_overlay').onclick = closeModal;
document.getElementById('close').onclick = closeModal;

document.getElementById('open').onclick = function(){
  openModal();
}
>>>>>>> Stashed changes
