var romanToInt = function(s) {
    var hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var arr = s.split("");
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if(hash[arr[i]] < hash[arr[i + 1]]) {
            sum -= hash[arr[i]];
        } else {
            sum += hash[arr[i]];
        }
    }
    return sum;
};