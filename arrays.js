var weights = [5, 1, 455, 4, 54, 5, 7, 87, 541, 24, 44, 4, 1, 21, 48, 571, 8, 7, 4, 81, 81, 8, 1]


Array.prototype.cycling = function (callbackFn) {
    for (const index in this) {
        callbackFn(this[index], index)
    }
}
Array.prototype.filtration = function (callbackFn) {
    var newArray = [];
    for (const index in this) {
        if (callbackFn(this[index], index)) {
            newArray.push(this[index]);
        }
    }
    return newArray
}
Array.prototype.mapping = function (callbackFn) {
    var newArray = [];
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            newArray.push(callbackFn(this[index], index))
        }
    }
    return newArray
}
weights = weights
    .filtration((value) => value < 10)
    .filtration((value) => value >= 5)
    .mapping((value) => value * 10)

let weightIterator = weights[Symbol.iterator]();

let weightIteratorRequest = weightIterator.next()
while (!weightIteratorRequest.done) {
    console.log(weightIteratorRequest.value);
    weightIteratorRequest = weightIterator.next()

}
