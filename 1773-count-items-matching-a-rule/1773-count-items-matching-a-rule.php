class Solution {

    /**
     * @param String[][] $items
     * @param String $ruleKey
     * @param String $ruleValue
     * @return Integer
     */
    function countMatches($items, $ruleKey, $ruleValue) {
        
        $count = 0;
        foreach($items as $item) {
            if ($ruleKey === "type" && $ruleValue === $item[0]  ||
                $ruleKey === "color" && $ruleValue === $item[1] ||
                $ruleKey === "name" && $ruleValue === $item[2]) {
                $count++;
            }
        }
        
        return $count;
    }
}