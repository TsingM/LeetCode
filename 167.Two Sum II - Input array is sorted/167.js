/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var low = 0, high = numbers.length - 1;
    while(low < high) {
        if(numbers[low] + numbers[high] == target) {
            return [++low, ++high];
        } else if(numbers[low] + numbers[high] > target) {
            high--;
        } else {
            low++;
        }
    }
};