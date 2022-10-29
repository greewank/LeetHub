/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let finalArr=[];
    
    const dfs = (i, nums)=>{
        if(i===nums.length){
            finalArr.push(nums.slice());
            return;
        }
        
        for(let j=i; j<nums.length; j++){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i+1, nums);
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    };
    
    dfs(0, nums);
    return finalArr;
};