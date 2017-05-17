/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var arr = s.split('');
    var re =  /^[0-9a-zA-Z]*$/;
    var low = 0, high = arr.length - 1;
    while(low < high) {
        // 低位指针向上遍历直到遇到字母数字
        while(!re.test(arr[low]) && low < high) {
            low++;
        }
        // 高位指针向下遍历直到遇到字母数字
        while(!re.test(arr[high]) && low < high) {
            high--;
        }
        // 若两者不同则返回false
        if(arr[low].toUpperCase() !== arr[high].toUpperCase()) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};