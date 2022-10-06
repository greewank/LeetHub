/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let newArr = [];
    let prefix = 1;
    for(let i =0; i<nums.length; i++){
        newArr.push(prefix);
        prefix = prefix * nums[i];
    }
    let postfix = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        newArr[i] = newArr[i] * postfix;
        postfix = postfix * nums[i];
    }
    return newArr; 
};