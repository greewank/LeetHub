/**
 * @param {number} n
 * @return {boolean}
 */

// USING LINKEDLIST CYCLE TECHNIQUE

const hait = nums =>{
    let total = 0;
    
    while(nums !== 0){
        let lD = nums % 10;
        nums = Math.floor(nums/10);
        total += Math.pow(lD, 2);
    }
    return total;
}

var isHappy = function(n) {
    let fast = n;
    let slow = n;
    
    while(true){
        fast = hait(hait(fast));
        slow = hait(slow);
        if(fast === slow){
            return fast === 1;
        }
    }
};