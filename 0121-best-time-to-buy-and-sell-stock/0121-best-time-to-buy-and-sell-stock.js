/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let first = 0;
    let second = 1;
    let maxResult = 0;
    while(second < prices.length){
        if(prices[first]<prices[second]){
            maxResult = Math.max(prices[second]-prices[first], maxResult);
        } else{
            first = second;
        }
        second++;
    }
    return maxResult;
};