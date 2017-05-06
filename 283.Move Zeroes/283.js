/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0, length = nums.length;
    for(var i = 0; i < length; i++){
        if(nums[i] === 0) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    for(i = length - count; i < length; i++) {
        nums[i] = 0;
    }
}