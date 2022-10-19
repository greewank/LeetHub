/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//     Linkedlist problem need to find out the beginnning of the cycle which is always
//     the duplicate number
//     First find where the cycle starts
    let [slow, fast] = [0,0];
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if(slow === fast){
            break;
        }
    }
    
//     Then, another slow pointer(check) which is going to be the result. 
//     So, both the slow pointer and the check pointer go 1 at a time and the intersection is the result.
    let check = 0;
    while(true){
        slow = nums[slow];
        check = nums[check];
        if(slow === check){
            break;
        }
    }
    return check;
};