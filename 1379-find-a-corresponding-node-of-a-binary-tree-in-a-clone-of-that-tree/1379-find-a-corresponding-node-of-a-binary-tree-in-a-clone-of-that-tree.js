/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

let ans;

function inorder(o, c, target) {
    if (o !== null) {
        
        if (c.val === target.val) {
            ans = c;
        }
        
        inorder(o.left, c.left, target);
        inorder(o.right, c.right, target);
    }
}

var getTargetCopy = function(original, cloned, target) {
    if (cloned !== null && original !== null) {
        if (cloned.val === target.val) {
            ans = cloned;
        }
        
        getTargetCopy(original.left, cloned.left, target);
        getTargetCopy(original.right, cloned.right, target);
    }
    
    return ans;
};