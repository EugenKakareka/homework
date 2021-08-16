function makeCounter() {
    let count = 0;
    return function(a) {
        return count += a
    }
}

let counter = makeCounter()



function getArray() {
    let arr = []
    return function(elem) {
        if (elem == undefined) {
            arr = []
        }
        arr.push(elem)
        return arr
    }
}

let getUpdatedArr = getArray()



function setTime() {
    return function() {
        let previousCall = this.lastCall
        this.lastCall = new Date()
        if (previousCall === undefined) {
            console.log('Enabled')
        } else console.log((this.lastCall - previousCall) / 1000)
    }
}

let getTime = setTime()




const timer = time => {
    let min = parseInt(time / 60)
    let seconds = parseInt(time - min * 60)

    if (min < 10) { min = '0' + min }
    if (seconds < 10) { seconds = '0' + seconds }

    console.log(min + ':' + seconds);
    time--

    if (time > 0) {
        setTimeout(function() { timer(time) }, 1000)
    } else {
        console.log('Time End')
    }
}