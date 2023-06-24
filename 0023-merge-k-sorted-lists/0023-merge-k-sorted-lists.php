/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode[] $lists
     * @return ListNode
     */
    
    function mergeTwoLinkedLists($list1, $list2) {
        
        if ($list1 !== null && $list2 === null) return $list1;
        
        if ($list1 === null && $list2 !== null) return $list2;
        
        if ($list1 === null && $list2 === null) return null;
        
        $current = new ListNode();
        $dummy = $current;
        
        while ($list1 !== null && $list2 !== null) {
            if ($list1->val <= $list2->val) {
                $current->next = $list1;
                $list1 = $list1->next;
            } else {
                $current->next = $list2;
                $list2 = $list2->next;
            }
            
            $current = $current->next;
        }
        
        
        if ($list1 !== null) {
            $current->next = $list1;
        }
        
        if ($list2 !== null) {
            $current->next = $list2;
        }
        
        
        $head = $dummy->next;
        return $head;
    }
    
    
    function mergeKLists($lists) {
        
        $listLength = count($lists);
        for ($i = 0; $i < $listLength - 1; $i++) {
            $lists[$i + 1] = $this->mergeTwoLinkedLists($lists[$i], $lists[$i + 1]);
        }
        

        return $lists[$listLength - 1];
    }

    
}