(() => {
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    Array.prototype.shuffle = function () {
        return shuffleArray(this)
    }
    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    }
    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    }
    Array.prototype.maxIndex = function () {
        return this.indexOf(Math.max.apply(null, this))
    }
    Array.prototype.minIndex = function () {
        return this.indexOf(Math.min.apply(null, this))
    }
    $.moveBottom = function (speed) {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, speed ?? 1000);
    }
})()


