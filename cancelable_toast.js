class CancelableToast extends Toast{

	constructor (text, duration){
		console.log("child constructor");
		super(text, duration);
		this.cancelButton = document.createElement('button');
	  this.cancelButton.classList.add("danger");
	  this.cancelButton.innerHTML = 'Отмена';
		var _obj = this;
	  this.cancelButton.onclick = function(){
			_obj.hide();
	    if (_obj.onCanceled!==undefined) _obj.onCanceled();
	  }
		this.mainPopup.append(this.cancelButton);
	}
	setMessasge(text){
		this.cancelButton.innerHTML = text;
	}
}
