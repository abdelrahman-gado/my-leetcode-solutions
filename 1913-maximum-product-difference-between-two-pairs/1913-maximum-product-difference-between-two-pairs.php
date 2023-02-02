class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProductDifference($nums) {
        
        $max = -1;
        $max2 = -1;
        $min = PHP_INT_MAX;
        $min2 = PHP_INT_MAX;
        
        foreach ($nums as $i) {
            
            if ($i > $max) {          // 1
                $max2 = $max;
                $max = $i;
            } else if ($i > $max2) {  // 2
                $max2 = $i;
            }
            if ($i < $min) {          // 3
                $min2 = $min;
                $min = $i;
            } else if ($i < $min2) {  // 4
                $min2 = $i;
            }
        }
        
        return ($max * $max2) - ($min * $min2);
    }
}