/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let sMap = {
        ")":"(",
        "}":"{",
        "]":"[",
    };
    let kahileAaucha = [];
    for(let i = 0; i<s.length; i++){
        if(s[i]=== "(" || s[i]==="{" || s[i]==="["){
            kahileAaucha.push(s[i]);
            continue;
        }
        let fluently = kahileAaucha.pop();
        if(fluently !== sMap[s[i]]) return false;
    }
    return !kahileAaucha.length;
};