import BrowserDetector from './detector.js';

const detector = (new BrowserDetector(window.navigator.userAgent)).parseUserAgent();
console.log(detector)

function toggleType(inputElement) {
    if (inputElement.type === "password") {
        inputElement.type = "text";
    } else {
        inputElement.type = "password";
    }
}

function attachClick(eyeElement) {
    var slaveInput = document.getElementById(eyeElement.dataset.control)
    var controlType = eyeElement.dataset.logic;
    if (controlType === 'toggle') {
        $(eyeElement).click(() => {
            toggleType(slaveInput)
        })
    } else if (controlType === 'press') {
        $(eyeElement).mousedown(() => {
            toggleType(slaveInput)
        })
        $(eyeElement).mouseup(() => {
            toggleType(slaveInput)
        })
    }
}

$.fn.eyeInput = function () {
    this.each(function () {
        var passwordInput = this
        if (!detector.isIE && !detector.isEdge) {
            $(this).after($("<button></button>", {
                class: 'eye bi bi-eye',
                "data-logic": passwordInput.dataset.logic,
                "data-control": passwordInput.id
            }))
            attachClick(this.nextElementSibling)
        }
    });
}
$('.eye-controlled').eyeInput()