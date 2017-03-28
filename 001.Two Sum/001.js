var twoSum = function(nums, target) {
    // 数组拷贝
    var arr = nums.concat();
    // 从小到大排序
    arr.sort(
        function (x, y) {
            return x - y;
        });

    var low = 0, high = arr.length - 1;
    while(low < high) {
        if(arr[low] + arr[high] === target) {
            // 数组映射，如果两者一样则特殊处理
           if(arr[low] === arr[high]) {
                low = nums.indexOf(arr[low]);
                high = nums.indexOf(arr[high], low + 1);
            }
            else{
                low = nums.indexOf(arr[low]);
                high = nums.indexOf(arr[high]);
            }
            return [low, high];
        }
        if(arr[low] + arr[high] > target)
            high--;
        if(arr[low] + arr[high] < target)
            low++;
    }
    return false;
};