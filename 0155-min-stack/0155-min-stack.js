
var MinStack = function() {
    this.vals = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   this.vals.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.vals.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.vals[this.vals.length - 1]; //taking the last element because stack is LIFO(Last In                                                First Out)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Number.MAX_SAFE_INTEGER;
    this.vals.forEach(val => min = Math.min(min,val));
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */