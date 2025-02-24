const repeatString = function(string, num) {
    const singleString = string.toString();
    let repeatedString = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            repeatedString = repeatedString.concat(singleString);
        }
    } else {
        return "ERROR"
    }
    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
