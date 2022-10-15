/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let hashMap = {};
    let left = 0, maxF = 0, res = 0;
    for(let right = 0; right<s.length; right++){
        hashMap[s[right]] = hashMap[s[right]] + 1 || 1;
        maxF = Math.max(maxF, hashMap[s[right]]);
    while(((right-left)+1)-maxF > k){
        hashMap[s[left]]--;
        left++;
    }
    res = Math.max(right-left+1, res);    
    }
    return res;
};