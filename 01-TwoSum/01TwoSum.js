// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
	// nested for loop
	// Brute force, O(n**) solution
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		let numI = nums[i];
	// 		let numJ = nums[j];
	// 		if (numI + numJ === target) {
	// 			return [i, j];
	// 		}
	// 	}
	// }

	// Two pass O(n) solution using hashtable
	let pairs = {};
	for (let i = 0; i < nums.length; i++) {
		number = nums[i];
		if (!pairs[number]) {
			pairs[number] = [i];
		} else {
			pairs[number].push(i);
		}
	}

	for (const key of Object.keys(pairs)) {
		let searchKey = target - key;
		let dictValue = pairs[searchKey];

		if (dictValue) {
			if (parseInt(key) + parseInt(searchKey) === target) {
				return [pairs[searchKey][searchItemLength - 1], pairs[key][0]];
			} else if (dictValue.length > 1 && dictValue + dictValue === target) {
				return [dictValue[0], dictValue[-1]];
			}
		}
	}
};

console.log(twoSum([3, 3], 6));
