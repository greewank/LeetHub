/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i=0; i<nums.length; i++){
        map[nums[i]] = i;
    }
    for(let j = 0; j<nums.length; j++){
        let result = target - nums[j];
        if(map[result] && map[result]!==j){
            return [j, map[result]];
        }
    }
};