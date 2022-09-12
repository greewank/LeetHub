/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let naan = nums.sort((a,b)=> a - b);
    for(let i = 0; i<naan.length; i++){
        if(naan[i] === naan[i+1]){
            return true;
        }
    }
    return false;
};