/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let result = 0;
    let power = 1;
    while(num > 0){
        result = result + (num % 2 ^ 1) * power;
//         Power is left shift so left shift by 1 basically shows a pattern being multiplied
//         by 2. Num is right shift so it's divide by 2 (the pattern when you do it by 1).
        power <<= 1;
        num >>= 1;
    }
    return result;
};