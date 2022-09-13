/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     First method (using sort)
    // let naan = nums.sort((a,b)=> a - b);
    // for(let i = 0; i<naan.length; i++){
    //     if(naan[i] === naan[i+1]){
    //         return true;
    //     }
    // }
    // return false;
    
//   Second method (Using Set):
    const set = new Set();
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i]))
            return true;
        set.add(nums[i]);
    }
    return false;
};