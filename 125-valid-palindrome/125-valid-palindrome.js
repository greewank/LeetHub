/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
    let prev = 0;
    let next= s.length - 1;
    while(prev <= next){
        if(s.charAt(prev) != s.charAt(next)){
            return false;
        }
        prev++;
        next--
    }
    return true;
};