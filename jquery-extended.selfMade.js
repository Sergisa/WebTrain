function $(selector) {
    const elements = document.querySelectorAll(selector);
    return {
        elements: elements,
        // element:element,
        attr: function (key, value) {
            this.elements.forEach((element) => element.setAttribute(key, value));
            return this;
        },
        html: function (text) {
            if (text === undefined) {
                return this.elements[0].innerHTML;
            } else {
                this.elements.forEach(element => element.innerHTML = text);
                return this;
            }
        },
        addClass: function (className) {
            this.elements.forEach((element) => {
                if (element.classList.contains(className)) {
                    element.classList.add(className)
                }
            });
            return this;
        },
        removeClass: function (className) {
            this.elements.forEach((element) => element.classList.remove(className));
            return this;
        },
        css: function (style, value) {
            const applyStyleList = (styles) => {
                for (const singleStyle in styles) {
                    this.elements.forEach((element) => element.style[singleStyle] = styles[singleStyle]);
                }
            }

            if (typeof style === "object") {
                applyStyleList(style)
            } else if (typeof style === "string") {
                let object = {};
                object[style] = value
                applyStyleList(object)
            }
            return this;
        },
        appendTo: function (element) {
            element.appendChild(this.elements);
            return this;
        },
        append: function (appendingElement) {
            this.elements.forEach((element) => element.appendChild(appendingElement));
            return this;
        }
    };
}
