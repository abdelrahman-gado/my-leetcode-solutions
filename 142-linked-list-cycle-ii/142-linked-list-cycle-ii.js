/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    const map = new Map();
    let thead = head;
    let i = 0;
    
    while (thead !== null) {
        if (map.has(thead)) {
            return thead;
        }
        
        map.set(thead, i);
        thead = thead.next;
        i++;
    }
    
    
    return null;
};