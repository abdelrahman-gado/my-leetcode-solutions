/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var buildTree = function (nums, start, end) {
    
        if (start > end) {
            return null;
        }

        const m = Math.max(...(nums.slice(start, end+1)));
        const indexOfm = nums.indexOf(m);

        const root = new TreeNode(m);
        root.left = buildTree(nums, start, indexOfm-1);
        root.right = buildTree(nums, indexOfm+1, end);

        return root;
    }

var constructMaximumBinaryTree = function(nums) {
    
    return buildTree(nums, 0, nums.length-1);
};