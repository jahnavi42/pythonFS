function countTrue(arr) {
	return arr.filter((val) => val === true).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]))