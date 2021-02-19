HTMLElement.prototype.wrap = function(wrapper){
  
    this.parentNode.insertBefore(wrapper, this);
    wrapper.appendChild(this);
}
var wrapperObject = document.createElement("div");
wrapperObject.classList.add('card');

document.getElementById("comand").onclick = function(){
    document.getElementById("wrapping").wrap(wrapperObject);
}