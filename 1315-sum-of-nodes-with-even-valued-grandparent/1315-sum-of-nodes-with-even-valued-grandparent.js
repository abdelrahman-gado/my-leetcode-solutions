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

var sumEvenGrandparent = function(root) {
    const listOfEvens = [];
    let evens = function (root) {
        if (root === null) {
            return;
        }
        
        if (root.val % 2 === 0) {
            listOfEvens.push(root);
        }
        evens(root.left);
        evens(root.right);
    }
    evens(root);
    
    let sum = 0;
    let fn = function (list) {
        for (let i = 0; i < list.length; i++) {
            const grandPa = list[i];
            if (grandPa.left != null && grandPa.left.left !== null) {
                sum += grandPa.left.left.val;
            }
            
            if (grandPa.left != null && grandPa.left.right !== null) {
                sum += grandPa.left.right.val;
            }
            
            if (grandPa.right != null && grandPa.right.right !== null) {
                sum += grandPa.right.right.val;
            }
            
            if (grandPa.right != null && grandPa.right.left !== null) {
                sum += grandPa.right.left.val;
            }
        }
    }
    fn(listOfEvens)
    
    return sum;
};