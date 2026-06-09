//An anonymous function is a function without a name that can be assigned to a variable.
   

const sum = function(sum1, sum2) {
	return (sum1 + sum2);
}

console.log(sum(7, 4));





//The function is stored in a variable and called us in that variable.
        



const calculate = function(a = 2, b = 3) {
	return a * b;
}


console.log(calculate()); // 6
console.log(calculate(4)); // 12
console.log(calculate(4, 5)); // 20


// ===
