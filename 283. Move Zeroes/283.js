/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var low = 0, high = nums.length - 1;
    while(low < high) {
        if(nums[low] == 0)
        low++;
    }
}