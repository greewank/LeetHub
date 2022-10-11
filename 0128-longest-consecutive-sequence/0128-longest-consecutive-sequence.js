/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
//     Visualize the problem as each element being the start of a list. 
//     First check if it is the start of a list, if it is increase count easy AF. But i know
// i'll freaking forget it.
    let setoKeti = new Set();
    for(let k of nums){
        setoKeti.add(k);
    }
    let max = 0;
    for(let i of setoKeti){
        if(!setoKeti.has(i-1)){
            let count = 0;
            while(setoKeti.has(i++)){
                count++;
            }
            max = Math.max(max,count);
        }
    }
    return max;
};