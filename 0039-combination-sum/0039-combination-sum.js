/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let finalArr = [];
    candidates = candidates.sort((a,b)=>a-b);
    const dfs = (i, candidates, target, slate)=>{
        if(target < 0){
            return;
        }
        
        if(target===0){
           finalArr.push(slate.slice());
           return;
        }
        for(let j =i; j<candidates.length; j++){
            slate.push(candidates[j]);
            dfs(j, candidates, target-candidates[j], slate);
            slate.pop();
        }
    }
    
    dfs(0, candidates, target, []);
    return finalArr;
};