// named function
function greetings(name) {
	console.log(`Hello, ${name}!`);
}

greetings("Mellissah");


const calculateArea = (length, width) => {
	const area = length * width;
	return `The area of the rectangle is ${area} square units`;
};

console.log(calculateArea(5, 10));

