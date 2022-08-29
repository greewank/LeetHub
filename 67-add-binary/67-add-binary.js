/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0){
        let A = a[i] ? a[i] : '0';
        let B = b[j] ? b[j] : '0';
        sum = String(A ^ B ^ carry) + sum;
        if (A === B && A !== String(carry)){
            carry = Number(!carry);
        }
        i--;
        j--;
    }
    if(carry){
        sum = String(carry) + sum;
    }
    return sum;
};