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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    const levelList = [];
    
    if (root === null) {
        return levelList;
    }
    
    const queue = [root];
    
    while (queue.length > 0) {
        
        const list = [];
        let lenOfQueue = queue.length;
        
        while (lenOfQueue > 0) {
            const node = queue.shift();
            
            if (node !== null) {
                list.push(node.val);
            }
            
            if (node.left !== null) {
                queue.push(node.left);
            }
            
            if (node.right !== null) {
                queue.push(node.right);
            }
            
            lenOfQueue--;
        }
        
        levelList.push(list);
    }
    
    return levelList;
};