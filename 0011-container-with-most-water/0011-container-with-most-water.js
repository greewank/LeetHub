/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let first = 0;
    let last = height.length - 1;
    let area = 0;
    while(first < last){
        let leastArea = Math.min(height[first], height[last]);
        area = Math.max (area, leastArea * (last - first));
        if(height[first]<height[last]){
            first++;
        }else{
            last--;
        }
    }
    return area;
};