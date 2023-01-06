// Function.prototype.curry = function (numArgs) {
//     let that = this
//     let args = []
//     function _curry
//     if args.length === numArgs
//         return args.that(more_args)
//     else
//         return _curry

// };

Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;
  return function _curry(num) {
    args.push(num);
    if (args.length === numArgs) {
      // function.apply
    } else {
      return _curry;
    }
  };
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

args = [5, 2, 3, 9];

join.curry(numArgs, firstArgs)(restArgs);

arrayLetters1 = ["c", "u"];
arrayLetters2 = ["r", "r", "y"];

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const curriedSum = sum.curry(3); // goal is to create a five letter join
curriedSum(num1);
curriedSum(num2);
curriedSum(num3);

// is the context the function? or is it the array?
