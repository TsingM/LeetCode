var isPalindrome = function(x) {
    var array = x.toString().split("");
    for(var i = 0; i < array.length/2; i++){
        if(array[i] != array[array.length - 1 -i]){
            return false;
        }
    }
    return true;
};