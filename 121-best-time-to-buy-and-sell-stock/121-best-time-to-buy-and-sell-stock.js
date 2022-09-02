/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     Easy peasy but took 1 hour smh
    let left = 0;
    let right = 1;
    let max_porofito = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let porofito = prices[right] - prices[left];
            max_porofito = Math.max(max_porofito, porofito);
        } else{
            left = right;
        }
        right++;
    }
    return max_porofito;
}