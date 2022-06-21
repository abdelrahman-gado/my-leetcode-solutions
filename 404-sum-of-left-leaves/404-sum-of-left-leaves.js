/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    const stack = [root];
    let leftSum = 0;
    
    while (stack.length > 0) {
        const current = stack.pop();
        
        if (current === null) {
            continue;
        }
        
        if (current.left !== null && current.left.left === null && current.left.right === null) {
            leftSum += current.left.val;
        }
        
        stack.push(current.left);
        stack.push(current.right);
    } 
    
    
    return leftSum;
    
};