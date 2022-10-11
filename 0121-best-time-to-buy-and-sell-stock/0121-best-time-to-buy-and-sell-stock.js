/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let first = 0;
    let second = 1;
    let max_Prof = 0;
    while(second < prices.length){
        if(prices[first]<prices[second]){
            max_Prof = Math.max(prices[second]-prices[first], max_Prof);
        }else{
            first = second;
        }
        second++;
    }
    return max_Prof;
};