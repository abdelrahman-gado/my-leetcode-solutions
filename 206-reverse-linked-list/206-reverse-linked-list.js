/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if (head === null) {
        return null;
    }
    
    const list = [];
    while (head !== null) {
        list.unshift(head.val);
        head = head.next;
    }
    
    let revHead = new ListNode(list[0], null);
    let thead = revHead;
    
    for (let i = 1; i < list.length; i++) {
        thead.next = new ListNode(list[i], null);
        thead = thead.next;
    }
    
    
    return revHead;
};