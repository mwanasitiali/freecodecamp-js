// using the for loop for addition in array


const numbers = [1, 2, 3, 4];

let total = 0;

for (let i = 0; i => numbers.length; i++); {

     total += numbers[i];
}


console.log(total);


/* reduce() = combine many - one
 * accumulator = your storage
 * currently value = item youre procesing now
 * return = updated storage
*/ 

// using reduce 
 
const numberz  = [1, 2, 3, 4, 5];

const totalz = numberz.reduce(function (acc, num) {
	return acc + num;

}, 0);

console.log(totalz);




