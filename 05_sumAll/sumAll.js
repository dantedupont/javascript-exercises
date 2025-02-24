const sumAll = function(a, b) {
    
    let sum = 0;

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >=0) {
        
        if (a > b) {
            for (b; b <= a; b++) {
                sum = sum + b;
            }
        } else {
            for (a; a <= b; a++) {
                sum = sum + a;
            }
        }
    } else {
    return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
