const palindromes = function (palindrome) {
    let removePunc = palindrome.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toUpperCase();
    let mirror = removePunc.split('').reverse().join('');
    if (removePunc === mirror) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
