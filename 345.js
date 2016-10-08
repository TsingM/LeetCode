var reverseVowels = function(s) {
    var temp;
    var arr = s.split('');
    var low = 0;
    var high = arr.length - 1;
    var vowels = ['a','A','e','E','o','O','i','I','u','U'];
    while(low < high) {
        while((low < high) && (vowels.indexOf(arr[low]) == -1)) {
        	low++;
        }
        while((low < high) && (vowels.indexOf(arr[high]) == -1)) {
        	high--;
        }
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