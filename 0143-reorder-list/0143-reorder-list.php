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
    function reorderList($head) {
        
        $length = 0;
        $list = [];
        
        $temp = $head;
        while ($temp !== null) {
            $length++;
            $list[] = $temp->val;
            $temp = $temp->next;
        }
        
        
        $i = 0;
        $j = 0;
        $k = 0;
        $temp = $head;
        while ($i < $length) {
            if ($i % 2 === 0) {
                $temp->val = $list[$j];
                $j++;
            } else {
                $temp->val = $list[$length - $j];
            }
            
            $i++;
            $temp = $temp->next;
        }
        
        return $head;
    }
}