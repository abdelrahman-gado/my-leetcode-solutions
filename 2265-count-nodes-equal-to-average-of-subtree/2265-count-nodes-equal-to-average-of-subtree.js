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



var sizeOfSubtree = function (root) {
    if (root === null) {
        return 0;
    }
    
    return 1 + sizeOfSubtree(root.left) + sizeOfSubtree(root.right);
}

var sumOfSubtree = function(root) {
    if (root === null) {
        return 0;
    }
    
    return root.val + sumOfSubtree(root.left) + sumOfSubtree(root.right);
}


var averageOfSubtree = function(root) {

    let count = 0;
    let average = function (root) {
        if (root === null) {
            return;
        }

        const av = Math.floor(sumOfSubtree(root) / sizeOfSubtree(root));
        if (av === root.val) {
            ++count;
        }
        average(root.left);
        average(root.right);
    }
    average(root)
    return count;
};