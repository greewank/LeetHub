/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    } 
    //     When creating map, you can create empty one and set key-values accordingly.
    let sMap = {};
    let tMap = {};
    for(let i = 0; i<s.length; i++){
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
        console.log(sMap[s[i]]);
        tMap[t[i]] = tMap[t[i]] + 1 || 1;
    }
    
    for(let k in sMap){
        if(sMap[k] !== tMap[k]){
            return false;
        }
    }
    return true;
};