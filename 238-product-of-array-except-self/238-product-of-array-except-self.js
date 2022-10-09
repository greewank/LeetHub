/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let prev = 1;
    for(let i = 0; i<nums.length; i++){
        result.push(prev);
        prev = nums[i] * prev;
    }
    let post = 1;
    for(let j = nums.length-1; j>=0; j--){
        result[j] = result[j] * post;
        post = nums[j] * post;
    }
    return result;
};