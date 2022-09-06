/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let element = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > nums[element]){
            nums[element + 1] = nums[i];
            element++;
        }
    }
    nums.length = element + 1;
    return nums.length;
};