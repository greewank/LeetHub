/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(s) {
    s.sort();
    for(let i=0; i<s[0].length;i++){
        if(s[0][i]!==s[s.length-1][i]) return s[0].slice(0,i);
    }
    return s[0];
}
