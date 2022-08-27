/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for(let i=0; i<=nums.length; i++){
        let val = nums[i];
        hash[val] = i;
    }
    for(let i=0; i<=nums.length; i++){
        let runningKey = target - nums[i];
        if(hash[runningKey] && hash[runningKey]!==i){
            return [i, hash[runningKey]];
        }
    }
};