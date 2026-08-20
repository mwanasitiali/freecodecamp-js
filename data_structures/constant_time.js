// CONSTANT TIME

// The number of operations never changes
// Whether arr has 5 elements or 5 millions does exactly one operation: grab the item at index 0.Thats why array can accesed at 0


function getFirstElement(arr) {
	return arr[0];
}

console.log(getFirstElement([10, 20, 30, 40, 50]));


