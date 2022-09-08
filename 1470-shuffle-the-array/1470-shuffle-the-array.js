/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let angryArr = [];
    for(let i=0;i<n;i++){
        angryArr.push(nums[i]);
        angryArr.push(nums[n+i]);
    }
    return angryArr;
};