function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
        html: function (string) {
            if (string === undefined) {
                return this.mainObject.innerHTML;
            } else {
                this.mainObject.innerHTML = string;
                return this;
            }
        },
        append: function (string) {
            this.mainObject.innerHTML += string;
            return this;
        },
        addClass: function (singleClassName) {
            this.mainObject.classList.add(singleClassName);
            return this;
        },
        removeClass: function (singleClassName) {
            this.mainObject.classList.remove(singleClassName)
            return this;
        },
        show: function () {
            this.mainObject.style.display = "block";
            return this;
        },
        hide: function () {
            this.mainObject.style.display = "none"
            return this;
        },
        click: function (eventHandler) {
            if (eventHandler) {
                this.mainObject.addEventListener('click', function (event) {
                    const callBackResult = eventHandler(event);
                    if (!callBackResult) {
                        event.preventDefault();
                        event.stopPropagation()
                    }
                });
            } else {
                this.mainObject.click()
            }
        }
    }
}