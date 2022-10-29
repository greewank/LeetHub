/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let finalArr = [];
    nums = nums.sort((a,b)=> a-b);
    const dfs = (i, nums, slate)=>{
        if((i === nums.length)){
            return finalArr.push(slate.slice());
        }
    
        dfs(i+1, nums, slate);
        slate.push(nums[i]);
        dfs(i+1, nums, slate);
        slate.pop();
    }
    
    dfs(0, nums, []);
    let hash = {};
    for(let el of finalArr){
        if(hash[el]){
            continue;
        }
        hash[el] = el;
    }
    return Object.values(hash);
};