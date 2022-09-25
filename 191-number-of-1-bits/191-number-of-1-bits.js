/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n!= 0){
        count += n % 2;
        n = n >>>= 1;
    }
    return count;
};