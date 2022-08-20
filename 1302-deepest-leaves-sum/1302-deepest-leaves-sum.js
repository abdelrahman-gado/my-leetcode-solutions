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

var maxDepth = function(root) {
    
    if (root === null) {
        return 0;
    }
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}



   
var deepestLeavesSum = function(root) {
 
    const maxDep = maxDepth(root);
    let sumOfMaxDepth = 0;
    findSum(root, maxDep, 1);
    function findSum (root, maxDep, currentDep) {
        
        if (root !== null) {

            if (currentDep === maxDep) {
                sumOfMaxDepth += root.val;
            }

            findSum(root.left, maxDep, currentDep + 1);
            findSum(root.right, maxDep, currentDep + 1);
        }

    }
    
    return sumOfMaxDepth;
    
};