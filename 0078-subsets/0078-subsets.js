/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const finalResult = [];
    function dfs(i, nums, slate){
        if(i === nums.length){
            finalResult.push(slate.slice());
            return;
        }
        //excluding case
        dfs(i+1, nums, slate);
        
        //including case
        slate.push(nums[i]);
        dfs(i+1, nums, slate);
        slate.pop();
    }
    dfs(0, nums, []);
    return finalResult;
};