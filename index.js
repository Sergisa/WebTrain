HTMLElement.prototype.wrap = function(wrapper){
  
    this.parentNode.insertBefore(wrapper, this);
    wrapper.appendChild(this);
}
HTMLElement.create = function(tagName){
    return document.createElement(tagName);
}
var wrapperObject = HTMLElement.create("div");
wrapperObject.classList.add('card');

document.getElementById("comand").onclick = function(){
    document.getElementById("wrapping").wrap(wrapperObject);
}