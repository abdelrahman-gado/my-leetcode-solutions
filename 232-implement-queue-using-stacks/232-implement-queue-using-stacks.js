
var MyQueue = function() {
    this.backStack = [];
    this.frontStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.backStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    if (this.frontStack.length > 0) {
        return this.frontStack.shift();
    }
    
    while (this.backStack.length > 0) {
        const item = this.backStack.pop();
        this.frontStack.unshift(item);
    }
    
    return this.frontStack.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
    if (this.frontStack.length > 0) {
        return this.frontStack[0];
    }
    
    while (this.backStack.length > 0) {
        const item = this.backStack.pop();
        this.frontStack.unshift(item);
    }
    
    return this.frontStack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.backStack.length === 0 && this.frontStack.length === 0)
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */