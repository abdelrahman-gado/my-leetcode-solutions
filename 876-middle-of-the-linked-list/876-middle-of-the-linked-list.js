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
var middleNode = function(head) {
    
    let linkedLength = 0;
    let node = head;
    let tnode = head;
    
    while(node !== null) {
        linkedLength++;
        node = node.next;
    }
    
    let middle;
    
    if (linkedLength % 2 === 0) {
        middle = linkedLength / 2;
    } else {
        middle = (linkedLength-1) / 2 ;
    }
    

    let i = 0;
    
    while(i !== middle) {
        tnode = tnode.next;
        i++;
    }
    
    
    return tnode;
};