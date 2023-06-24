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
     * @param ListNode $head
     * @return NULL
     */
    function reverseList($head) {
        
        if ($head === null) {
            return null;
        }
        
        $prev = null;
        $next = $head;
        
        while($next !== null) {
            $temp = $next->next;
            $next->next = $prev;
            $prev = $next;
            $next = $temp;
        }
        
        return $prev;
    }
    
    
    function reorderList($head) {
        
        
        $slow = $head;
        $fast = $head->next;
        
        while ($fast !== null && $fast->next !== null) {
            $slow = $slow->next;
            $fast = $fast->next->next;
        }
        
        
        $temp = $slow;
        $secondHead = $slow->next;
        $slow = $slow->next;
        while ($slow !== null) {
            $slow = $slow->next;
        }
        
        $temp->next = null;
        
        $secondHead = $this->reverseList($secondHead);
        
        $l = $head;
        $r = $secondHead;
        $ltemp = null;
        $rtemp = null;
        while ($l != null && $r !== null) {
            $ltemp = $l->next;
            $rtemp = $r->next;
            $l->next = $r;
            $r->next = $ltemp;
            $l = $ltemp;
            $r = $rtemp;
        }
        
        return $head;
    }
}