/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketMap = {
        ")":"(", 
        "}":"{", 
        "]":"["
    };
    let stack = [];
    for(let i = 0; i<s.length; i++){
        if(s[i]=== "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i]);
            continue;
        }
        let newElement = stack.pop();
        if(newElement !== bracketMap[s[i]]){
            return false;
        }
    }
    return !stack.length;
};