HTMLElement.prototype.wrap = function(wrapper){
  wrapper.appendChild(this);
}

class Toast{
  /*const LONG_DELAY = 3500; // 3.5 seconds
  const SHORT_DELAY = 2000; // 2 seconds*/
  constructor(text, duration){
    console.log("parent constructor");
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

  static makeText(text, duration){
    return new this(text, duration);
  }
  show(){
      var _obj = this;
      this.wrapper.classList.add('open');
      setTimeout(function(){
          _obj.wrapper.classList.remove('open');
          if (_obj.onHidden!==undefined) _obj.onHidden();
      }, this.currentDuration);
  }
  hide(){
      this.wrapper.classList.remove('open');
  }
}
