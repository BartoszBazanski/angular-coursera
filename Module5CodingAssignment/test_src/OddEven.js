// Returns random
function getRandomNumber(from, to) {
    return Math.random() * (to - from) + from;
}

function getRandomOddOrEven1to10(type, randomNumGenerator) {
    var found = false;
    while(!found) {
        var num = randomNumGenerator(1, 10);
        if(type === 'odd') {
            if(num % 2 !== 0) { return num; }
        } else {
            if(num % 2 === 0) { return num; }
        }
    }
}
