const leapYears = function (y) {
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                return true;
            } else return false;
        }
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
