function Modal(){
  this.header = document.createElement('h3');
  this.content = document.createElement('div');
  this.content.classList.add('content');
  this.overlay = document.createElement('div');
  this.closeButton = document.createElement('button');
  this.closeButton.innerHTML = 'Закрыть';

  this.closeButton.id = 'close';
  this.closeButton.classList.add('red_button');

  this.overlay.id = "main_overlay";
  this.overlay.classList.add("overlay");

  this.mainGlass = document.createElement('div');
  this.mainGlass.classList.add("glass");

  this.overlay.appendChild(this.mainGlass);
  this.mainGlass.appendChild( this.header);
  this.mainGlass.appendChild( this.content);
  this.mainGlass.appendChild( this.closeButton);
  var _modal = this;
  this.closeButton.onclick = function(){
    _modal.close();
  }
}
Modal.prototype.setTitle = function(title){
  this.header.innerHTML = title;
}
Modal.prototype.setContent = function(content){
  this.content.innerHTML = content;
}
Modal.prototype.open=function(){
  this.overlay.style.display = 'flex';
}
Modal.prototype.close=function(){
  this.overlay.style.display = 'none';
}
let modal = new Modal("Иван");
modal.setTitle("Модальное окно");
modal.setContent("Важное сообщение");

document.body.appendChild(modal.overlay);
