function curriedSum(numArgs) { // 4
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num); // []

        if (numArgs === numbers.length) {
            let total = 0;

            numbers.forEach(function(num) {
                total += num;
            });

            return total;
        } else {

            debugger;

            return _curriedSum;
        }
    }

}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56