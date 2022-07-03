/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    const list = [];
    let node = head;
    while (node !== null) {
        list.push(node.val);
        node = node.next;
    }
    
    return parseInt(list.join(""), 2);
};