/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var totalLenth = s.length, i = 0, j = 0, len = 0, temp = 0;
    var hash = {};
    while(j < totalLenth) {
        if(hash[s[j]] !== undefined) {
            i = hash[s[j]] + 1 > i ? hash[s[j]] + 1 : i;
        }
        hash[s[j]] = j;
        j++;
        temp = j -i;
        len = temp > len ? temp : len;
    }
    return len;
};