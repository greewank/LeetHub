/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let newArr=[];
    if (nums.length === 1) return nums;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] % 2 === 0){
            newArr.unshift(nums[i]);
        } 
        else {
            newArr.push(nums[i]);
        }
        
    }
    return newArr;
};