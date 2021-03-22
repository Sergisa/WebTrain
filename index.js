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
