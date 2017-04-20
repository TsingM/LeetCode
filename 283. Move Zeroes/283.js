/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
     for(var i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                count++;
            } else {
                nums[i - count] = nums[i];
                nums[i] = 0;
            }
        }
}