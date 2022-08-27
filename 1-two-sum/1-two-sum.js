/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash={};
    for(let i=0;i<=nums.length;i++){
        let val = nums[i];
        hash[val] = i;
    }
    for(let j = 0; j<=nums.length; j++){
        let result = target - nums[j];
        if(hash[result] && hash[result]!==j){
            return [j, hash[result]];
        }
    }
};