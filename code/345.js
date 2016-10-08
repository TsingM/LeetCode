var reverseVowels = function(s) {
    var temp;
    var arr = s.split('');
    var low = 0;
    var high = arr.length - 1;
    var vowels = ['a','A','e','E','o','O','i','I','u','U'];
    while(low < high) {
        // 低位指针移动
        while((low < high) && (vowels.indexOf(arr[low]) == -1)) {
        	low++;
        }
        // 高位指针移动
        while((low < high) && (vowels.indexOf(arr[high]) == -1)) {
        	high--;
        }
        // 交换
        temp = arr[high];
    	arr[high] = arr[low];
    	arr[low] = temp;
    	low++;
    	high--;
    }
    var s1 = arr.join('');
    return s1;
};
alert(reverseVowels('hello'));