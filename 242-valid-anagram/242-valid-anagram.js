/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
//     When creating map, you can create empty one and set key-values accordingly.
    let firstMap = {};
    let secondMap ={};
    
    for(let i = 0; i<s.length; i++){
        firstMap[s[i]] = firstMap[s[i]] + 1 || 1;
        secondMap[t[i]] = secondMap[t[i]] + 1 || 1;
    }
    
    for(const k in firstMap){
        if(firstMap[k] !== secondMap[k]){
            return false;
        }
    }
    return true;
};