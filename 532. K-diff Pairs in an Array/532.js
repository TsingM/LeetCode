/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort();
    var i = 0, j = 0, num = 0;
    while(i < nums.length && j < nums.length) {
        if(nums[i] + k < nums[j] || nums[i] === nums[i + 1]) {
            i++;
            j = i;
        } else {
            if(nums[i] + k === nums[j]) {
                num++;
            }
            j++;
        }
    }
    return num;
};