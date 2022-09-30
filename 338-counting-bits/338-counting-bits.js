/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
//     See the most significant bit and you find that out by offsetting it.
    let arr1 = Array(n+1).fill(0);
    let offset = 1;
    for(let i = 1; i<n+1; i++){
        if(2 * offset === i){
            offset = i;
        }
        arr1[i] = 1 + arr1[i - offset];
    }
    return arr1;
};