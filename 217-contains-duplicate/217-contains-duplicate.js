/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let hello = nums.sort((a,b)=>{
    //     return a-b;
    // });
    // for(let i = 0; i<hello.length; i++){
    //     if(hello[i] === hello[i+1]){
    //         return true;
    //     }
    // }
    // return false;
    
    let hash = new Set();
    for(let i = 0; i<nums.length; i++){
        if(hash.has(nums[i])){
            return true;
        }
        hash.add(nums[i]);
    }
    return false;
};