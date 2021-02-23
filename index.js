
function parent( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
};
function remove(event){
  var row = event.srcElement.offsetParent.parentNode;
  //var removeToast = Toast.makeText("Удалено <br>" + row.innerHTML , Toast.LONG_DELAY);
  var removeToast = CancelableToast.makeText("Удалено <br>" + row.innerHTML , 2500);
  row.hidden = true;
  removeToast.show();
  removeToast.onCanceled = function(){
    row.hidden = false;
  }
  removeToast.onHidden = function(){
    if(row.hidden) row.remove();
  }
  return false;
};
function view(event){
    Toast.makeText("Просматриваем", Toast.SHORT_DELAY).show();
    return false;
};

const removers = document.getElementsByClassName('remove');
const viewers = document.getElementsByClassName('view');

for(let i = 0; i < removers.length; i++){
  removers[i].addEventListener('click', remove, false);
}
for(let i = 0; i < viewers.length; i++){
  viewers[i].addEventListener('click', view, false);
}
