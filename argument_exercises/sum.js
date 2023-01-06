function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}


function spreadSum(...nums) {
    let total = 0;
    
    nums.forEach(num => total += num);
    
    return total;
}

console.log(spreadSum(1, 2, 3, 4) === 10);
console.log(spreadSum(1, 2, 3, 4, 5) === 15);