/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = s.split('');
    var vowel = ['a','A','e','E','o','O','i','I','u','U'];
    var low = 0, high = arr.length - 1, temp;
    while(low < high) {
        if(vowel.indexOf(arr[low]) !== -1 && vowel.indexOf(arr[high]) !== -1) {
            temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high--;
        }
        if(vowel.indexOf(arr[low]) === -1) {
            low++;
        }
        if(vowel.indexOf(arr[high]) === -1) {
            high--;
        }
    }
    var str = arr.join('');
    return str;
};