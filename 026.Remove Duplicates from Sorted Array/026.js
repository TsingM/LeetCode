/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var length = 1, i = 1, j = 1;
    while (i < nums.length) {
        if(nums[i] !== nums[i - 1]) {
            nums[j] = nums[i];
            j++;
            length++;
        }
        i++;
    }
    return length;
};