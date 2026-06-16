function add(x, y) {
	return x + y
};

console.log(add(3, 4));


// Named Function
function isEven(number) {
	return number % 2 === 0
}
console.log(isEven(5));
console.log(isEven(40));


// Arrow Function
const isEvens = number => number % 2 === 0;
console.log(isEvens(10));
console.log(isEvens(3));


// Anonymous Function
const IsEvenz = function(number) {
	return number % 2 === 0;
}
console.log(IsEvenz(7));
console.log(IsEvenz(60));

