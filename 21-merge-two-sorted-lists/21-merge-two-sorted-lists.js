/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let mhead = null;
    let t1 = null;
    let t2 = null;
    
    if (list1 === null && list2 === null) {
        return mhead;
    } else if (list1 !== null && list2 === null) {
        return list1;
    } else if (list1 === null && list2 !== null ) {
        return list2;
    }
    
    
    if (list1.val < list2.val) {
        mhead = new ListNode(list1.val, null);
        t1 = list1.next;
        t2 = list2;
    } else {
        mhead = new ListNode(list2.val, null);
        t1 = list1;
        t2 = list2.next;
    }
    
    let tmerged = mhead;
   
    while (t1 !== null && t2 !== null) {
        
        if (t1.val < t2.val) {
            tmerged.next = new ListNode(t1.val, null);
            t1 = t1.next;
        } else {
            tmerged.next = new ListNode(t2.val, null);
            t2 = t2.next;
        }
        
        tmerged = tmerged.next;
    }
    
    while (t1 !== null) {
        tmerged.next = new ListNode(t1.val, null);
        t1 = t1.next;
        tmerged = tmerged.next;
    }
    
    while (t2 !== null) {
        tmerged.next = new ListNode(t2.val, null);
        t2 = t2.next;
        tmerged = tmerged.next;
    }
    
    return mhead;
};