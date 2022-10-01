/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hello = nums.sort((a,b)=>{
        return a-b;
    });
    for(let i = 0; i<hello.length; i++){
        if(hello[i] === hello[i+1]){
            return true;
        }
    }
    return false;
    
    // let hash = {};
    // for(let i = 0; i<nums.length; i++){
    //     hash[nums[i]]
    // }
};