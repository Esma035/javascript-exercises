const repeatString = function (str, num) {

    if (num < 0) {
        return "ERROR";
    }
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(str);
    }
    return arr.join('');

};

// Do not edit below this line
module.exports = repeatString;
