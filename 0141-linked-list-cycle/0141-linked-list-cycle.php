/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */

class Solution {
    /**
     * @param ListNode $head
     * @return Boolean
     */
    function hasCycle($head) {
        
        if ($head === null || $head->next === null) {
            return false;
        }
        
        $slow = $head;
        $fast = $head;
        
        while ($fast !== null && $fast->next !== null) {
            $slow = $slow->next;
            $fast = $fast->next->next;
            if ($fast === $slow) {
                return true;
            }
        }
        
        return false;
    }
}