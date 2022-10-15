/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
//     Didn't understand the algorithm MAN (Ratta maar)
    const result = Array(T.length).fill(0);
    const stack = [];
    for(let i = 0; i<T.length; i++){
        let top = stack[stack.length-1];
        while(stack.length && T[top]<T[i]){
            const naruto = stack.pop();
            result[naruto] = i - naruto;
            top = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result;
};