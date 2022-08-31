/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr1 = [];
    arr1.push(1);
    arr1.push(1);
    for(let i=2; i<=n; i++){
//         Try to create a Fibonacci series (that's what I understood).
        arr1[i] = arr1[i-2] + arr1[i-1];
        arr1.push(arr1[i]);
    }
    return arr1[n];
}