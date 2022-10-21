/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
//     Understood the algorithm now.
    const result = Array(T.length).fill(0);
    let stack = [];
    for(let i = 0; i<T.length; i++){
      let top = stack[stack.length - 1];
      while(stack.length && (T[top] < T[i])){
            let hello = stack.pop();
            result[hello] = i - hello;
            top = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return result;
};