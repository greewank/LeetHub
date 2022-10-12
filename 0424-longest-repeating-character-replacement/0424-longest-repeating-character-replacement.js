/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
//     This follows neetcodes solution in javascript
    const charCunt = {};
    let left=0, maxF=0, res=0;
    for(let right = 0; right<s.length; right++){
        charCunt[s[right]] = charCunt[s[right]] + 1 || 1;
        maxF=Math.max(maxF, charCunt[s[right]]);
    while((right-left+1)-maxF > k){
        charCunt[s[left]]--;
        left++;
    }
    res = Math.max(res, (right-left+1));
    }
    return res;
};