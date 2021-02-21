HTMLElement.prototype.wrap = function(wrapper){
  wrapper.appendChild(this);
}

function Toast(text, duration){
  this.currentDuration = duration;
  this.message = text;

  this.wrapper = document.createElement('div');
  this.wrapper.id = 'main_wrapper';
  this.wrapper.classList.add("wrapper");


  document.body.append(this.wrapper);
  this.mainPopup = document.createElement('div');
  this.mainPopup.classList.add("popup");
  this.mainPopup.wrap(this.wrapper);
  this.mainPopup.innerHTML = this.message;

}
Toast.LONG_DELAY = 3500; // 3.5 seconds
Toast.SHORT_DELAY = 2000; // 2 seconds
Toast.makeText = function(text, duration){
  return new Toast(text, duration)
}
Toast.prototype.show = function(){
  var _obj = this;
  this.wrapper.classList.add('open');
  setTimeout(function(){
      _obj.wrapper.classList.remove('open');
  }, this.currentDuration);
}
