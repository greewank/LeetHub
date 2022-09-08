/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // The backtracking technique (can be found in combination sum 1 solution) used here      // is very very useful for any permutations, combinations or subset problems.
  //     
    const results = [];
    
    const nums = [];
    for(let i = 1; i<=9; i++) nums.push(i);
    
//     Creating dfs recursion helper so performing visualization using recursion
    const dfs = (i, nums, k, n, slate) =>{
//         backtracking case
        if(n < 0) return;
        
//         base case
        if(slate.length === k){
            if(n===0){
                results.push(slate.slice());
            }
            return;
        }
//         dfs recursive case
        for(let j=i; j<nums.length; j++){
            slate.push(nums[j]);
            dfs(j + 1, nums, k, n - nums[j], slate);
            slate.pop();
        }
    }
    dfs(0, nums, k, n, []);
    return results;
    
};