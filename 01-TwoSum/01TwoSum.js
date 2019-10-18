// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
	// nested for loop
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = 0; j < nums.length - 1; i++) {
			let numI = nums[i];
			let numJ = nums[j];
			console.log(`Adding ${numI} and ${numJ} equals ${numI + numJ}`);
			if (numI + numJ === target) {
				return [j, i];
			}
		}
	}
};

console.log(twoSum([2, 7, 5, 11], 9));
