function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
            if (i >= o.length) return {done: true};
            return {done: false, value: o[i++]}
        }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]
    }
    return arr2
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}

var BaseComponent = function () {
    function BaseComponent(element) {
        element = getElement(element);
        if (!element) {
            return
        }
        this._element = element;
        Data.set(this._element, this.constructor.DATA_KEY, this)
    }

    var _proto = BaseComponent.prototype;
    _proto.dispose = function dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (var _iterator = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(this)), _step; !(_step = _iterator()).done;) {
            var propertyName = _step.value;
            this[propertyName] = null
        }
    };
    _proto._queueCallback = function _queueCallback(callback, element, isAnimated) {
        if (isAnimated === void 0) {
            isAnimated = true
        }
        executeAfterTransition(callback, element, isAnimated)
    };
    BaseComponent.getInstance = function getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY)
    };
    BaseComponent.getOrCreateInstance = function getOrCreateInstance(element, config) {
        if (config === void 0) {
            config = {}
        }
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null)
    };
    _createClass(BaseComponent, null, [{
        key: "VERSION", get: function get() {
            return VERSION
        }
    }, {
        key: "NAME", get: function get() {
            throw new Error("You have to implement the static method \"NAME\" for each component!")
        }
    }, {
        key: "DATA_KEY", get: function get() {
            return "bs." + this.NAME
        }
    }, {
        key: "EVENT_KEY", get: function get() {
            return "." + this.DATA_KEY
        }
    }]);
    return BaseComponent
}();
export default BaseComponent;