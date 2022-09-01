/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
//     For loop approach didn't work so trying in while loop (maybe harder to understand)
    let area = 0;
    let frontOne = 0;
    let backOne = height.length - 1;
    while(frontOne < backOne){
        let least = Math.min(height[frontOne], height[backOne]);
        area = Math.max(area, least * (backOne - frontOne));
        if(height[frontOne] > height[backOne]){
            backOne--;
        } else{
            frontOne++;
        }
    }
    return area;
};