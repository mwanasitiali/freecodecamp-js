// Linear Search - 0(n)

//  Array Search             Worst case comparisons

 ----------------------------------------------------
//  5             5
// 10            10
// 100           100
//1,000         1,000
// 10,000         10,000
//1,000,00       1,000,000


// In the worst case, linear search may have to look at every element .
// So if the array contains n elements, Maximujm comparisons = n 

// If the target is the first element,you only make one comparison.
// If its the last element or ist present you make n comparison.
// So 0(n) describes the growth worst case upper bound





function linearSearch(arr, target) {
	let comparisons = 0;
	

for (let i = 0; i < arr.length; i++) {
	comparisons++;
	console.log(`Comparison ${comparisons}: ${arr[i]} === ${target}`);

	if (arr[i] === target) {
		console.log(`Found ${target} at index ${i}`);
		console.log(`Total comparisons: ${comparisons}`);
		return i;
	}
	}
		console.log(`${target} was not found`);
		console.log(`Total comparisons: ${comparisons}`);
		return -1;

}
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const result = linearSearch(numbers, 70);

console.log("Result:", result);
