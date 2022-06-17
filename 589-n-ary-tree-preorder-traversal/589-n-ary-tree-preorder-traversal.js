/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const preorderList = function (root) {
    
    if (root === null) {
        return [];
    }
    
    const list = [];
    const stack = [root];
    
    while (stack.length > 0) {
        
        const node = stack.pop();
        list.push(node.val);
        
        if (node.children) {
            stack.push(...(node.children.reverse()));
        }
        
    } 

    return list;
}

var preorder = function(root) {
    return preorderList(root);
};