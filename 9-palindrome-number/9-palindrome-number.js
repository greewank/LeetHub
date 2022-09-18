/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let hello = x.toString().split('').reverse().join('');
    return (hello === x.toString());
};