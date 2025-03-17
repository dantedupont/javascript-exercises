const fibonacci = function(num) {
    num = +num;
    let fibonacciArr = [1, 1,];
    if (num < 0){
        return 'OOPS';
    } else if (num === 0){
        return 0;
    } else {
        for (let i = 2; i < num; i++){
            fibonacciArr = fibonacciArr.concat((fibonacciArr[i-1] + fibonacciArr[i-2]));
        }
        return fibonacciArr[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

