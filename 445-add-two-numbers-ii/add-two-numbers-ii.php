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
class Solution 
{

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) 
    {
        $reversedL1 = $this->reverse($l1);
        $reversedL2 = $this->reverse($l2);

        $result = $this->add($reversedL1, $reversedL2);
        return $this->reverse($result);
    }

    function reverse($head) 
    {
        $newHead = null;
        $slow = $head;
        while ($slow !== null) {
            $fast = $slow->next;
            $slow->next = $newHead;
            $newHead = $slow;
            $slow = $fast;
        }

        return $newHead;
    }

    function add($reversedL1, $reversedL2) 
    {
        $tempRL1 = $reversedL1;
        $tempRL2 = $reversedL2;

        $dummyHead = new ListNode(0, null);
        $resultTemp = $dummyHead;
        
        $change = 0;
        while ($tempRL1 !== null && $tempRL2 !== null) {
            $addition = $change + $tempRL1->val + $tempRL2->val;
            if ($addition > 9) {
                $addition = (int) strval($addition)[-1];
                $change = 1;
            } else {
                $change = 0;
            }

            $resultTemp->next = new ListNode($addition, null);
            $resultTemp = $resultTemp->next;

            $tempRL1 = $tempRL1->next;
            $tempRL2 = $tempRL2->next;
        }

        while ($tempRL1) {
            $addition = $change + $tempRL1->val;
            if ($addition > 9) {
                $addition = (int) strval($addition)[-1];
                $change = 1;
            } else {
                $change = 0;
            }

            $resultTemp->next = new ListNode($addition, null);
            $resultTemp = $resultTemp->next;
            $tempRL1 = $tempRL1->next;
        }
    
        while ($tempRL2) {
            $addition = $change + $tempRL2->val;
            if ($addition > 9) {
                $addition = (int) strval($addition)[-1];
                $change = 1;
            } else {
                $change = 0;
            }

            $resultTemp->next = new ListNode($addition, null);
            $resultTemp = $resultTemp->next;
            $tempRL2 = $tempRL2->next;
        }

        if ($change > 0) {
            $resultTemp->next = new ListNode($change, null);
            $resultTemp = $resultTemp->next;
        }

        return $dummyHead->next;
    }
}