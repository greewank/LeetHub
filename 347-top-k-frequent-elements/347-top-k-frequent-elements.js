/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //This solutions is O(nlogn) although as of today i'm not clear of 
    // time complexity
    var obj ={}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1
        }else{
            obj[nums[i]] +=1
        }
    }
    let sortedKeys = Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
    console.log("SORTED", sortedKeys);
    let results =[]
     for(let i = 0; i < k; i++){
         results.push(sortedKeys[i])
     }
    return results;
};