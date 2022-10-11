/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    let result = [];
    for(let i = 0; i<nums.length; i++){
        let first = i+1, last = nums.length - 1, sum=0;
        while(first < last){
        let sum = nums[i] + nums[first] + nums[last];
        if(sum === 0){
            result.push([nums[i], nums[first], nums[last]]);
            while(nums[first]===nums[first+1]) first++;
            while(nums[last]===nums[last-1]) last--;
            first++;
            last--;
         } else if(sum <0) first++;
         else last--;
        }
        while(nums[i]===nums[i+1]) i++;
    }
    return result;   
};