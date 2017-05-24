/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1, j = n - 1, len = m + n - 1;
    while(i >= 0 || j >= 0) {
        if (i < 0) {
            nums1[len--] = nums2[j--];
        } else if (j < 0) {
            nums1[len--] = nums1[i--];
        } else if(nums1[i] > nums2[j]) {
            nums1[len] = nums1[i];
            i--;
            len--;
        } else {
            nums1[len] = nums2[j];
            j--;
            len--;
        }
    }
};