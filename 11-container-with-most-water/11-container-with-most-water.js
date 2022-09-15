/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
//     For loop approach didn't work so trying in while loop (maybe harder to understand)
    let firstOne = 0;
    let lastOne = height.length - 1;
    let area = 0;
    
    while(firstOne < lastOne){
        let least = Math.min(height[firstOne], height[lastOne]);
        area = Math.max(area, least * (lastOne - firstOne));
        
        if(height[firstOne] > height[lastOne]){
            lastOne-- ;
        }else{
            firstOne++;
        }
    }
    return area;
};