/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // Sliding window problem
    if(s1.length > s2.length) return false;
    let needy = {};
    for(let i =0; i<s1.length; i++){
        needy[s1[i]] = (needy[s1[i]] || 0) + 1;
    }
    let left = 0;
    let right = 0;
    let requiredLength = s1.length;
    while(right < s2.length){
        if(needy[s2[right]] > 0) requiredLength--;
        needy[s2[right]]--;
        right++;
        
        if(requiredLength === 0) return true;
        
        if(right - left === s1.length){
            if(needy[s2[left]] >= 0) requiredLength++;
            needy[s2[left]]++;
            left++;
        }
    }
    return false;
};