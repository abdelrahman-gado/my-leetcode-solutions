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
 * @return {TreeNode}
 */

var bstToGst = function(root) {
    const list = [];
    var inorder = function (root) {
        if (!root) {
            return;
        } 
        
        inorder(root.left);
        list.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    let count = 0;
    var changeBST = function (root) {
        if (!root) {
            return;
        }
        
        changeBST(root.left);
        root.val = list.slice(count).reduce((total, current) => total + current, 0);
        count++;
        changeBST(root.right);
    }
    changeBST(root);
    
    return root;
};