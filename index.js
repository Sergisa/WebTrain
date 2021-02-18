HTMLElement.prototype.wrap = function(wrapper){
  
    this.parentNode.insertBefore(wrapper, this);
    wrapper.appendChild(this);
}
var wrapper = document.createElement('div');
wrapper.id = 'main_wrapper';
wrapper.classList.add("wrapper");
document.getElementById("main_popup").wrap(wrapper);
document.getElementById('block_link').onclick = function(){
    document.getElementById("main_wrapper").classList.add('open');
    setTimeout(function(){
        document.getElementById("main_wrapper").classList.remove('open');
    }, 2000);
    return false;
};