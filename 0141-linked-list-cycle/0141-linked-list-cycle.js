/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    set = new Set();
    
    let temp = head;
    while(temp !== null) {
        if (set.has(temp)) {
            return true;
        } else {
            set.add(temp);
            temp = temp.next;
        }
    }
    
    return false;
};