/**
 * @param {string} s
 * @return {boolean}
 */
const hash = {
    ")":"(",
    "}":"{",
    "]":"[",
};
var isValid = function(s) {
    let queue = [];
    for(let i =0; i<s.length; i++){
        if(s[i]==="(" || s[i]==="{" || s[i]==="["){
            queue.push(s[i]);
            continue;
        }
        const theElement = queue.pop();
        if(theElement !== hash[s[i]]) return false;
    }
    return !queue.length;
};