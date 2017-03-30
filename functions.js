// 数组生成哈希表
function hash(nums) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return hash;
};