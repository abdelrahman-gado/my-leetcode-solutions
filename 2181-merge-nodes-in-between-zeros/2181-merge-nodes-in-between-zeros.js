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
var mergeNodes = function(head) {
    
    const mergedList = new ListNode();
    let tempMergedNode = mergedList;
    let tempSum = 0;
    let tempNode = head.next;
    
    while(tempNode !== null) {
        
        if (tempNode.val === 0) {
            tempMergedNode.val = tempSum;
            
            if (tempNode.next !== null){
                tempMergedNode.next =  new ListNode();
                tempMergedNode = tempMergedNode.next;
            }
            else {
                tempMergedNode.next = null
            }
                
            tempSum = 0;
            
        } else {
            tempSum += tempNode.val;
        }
        
        
        tempNode = tempNode.next;
    }
    return mergedList
};