function parent( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
};
function remove(event){
  var row = event.srcElement.offsetParent.parentNode;
  row.remove();
  console.log("Удаление", row);
  return false;
};
function view(event){
    console.log("Просмотр", event.srcElement.offsetParent.parentNode);
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
