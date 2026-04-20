const sumAll = function (a, b) {
    if (parseInt(a) !== a || parseInt(b) !== b || a < 0 || b < 0) {
        return "ERROR";
    }
    let bigger = a;
    let smaller = b;
    if ((a - b) < 0) {
        smaller = a;
        bigger = b;
    }
    let sum = 0;
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
