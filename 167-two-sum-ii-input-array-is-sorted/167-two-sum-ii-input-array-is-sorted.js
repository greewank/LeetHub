/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first = 0;
    let last = numbers.length - 1;
    while(first < last){
        let result = numbers[first] + numbers[last];
        if(result === target){
            break;
        } else if(result < target){
            first++;
        } else{
            last--;
        }
    }
    return [first+1, last+1];
};