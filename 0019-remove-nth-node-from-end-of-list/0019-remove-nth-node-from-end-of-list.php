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
     * @param Integer $n
     * @return ListNode
     */
    function removeNthFromEnd($head, $n) {
        
        $dummy = new ListNode(0, $head);
        $l = $dummy;
        
        $r = $head;
        while ($n > 0 && $r !== null) {
            $r = $r->next;
            $n--;
        }
        
        
        while ($r !== null) {
            $l = $l->next;
            $r = $r->next;
        }
        
        $l->next = $l->next->next;
        
        return $dummy->next;
    }
}