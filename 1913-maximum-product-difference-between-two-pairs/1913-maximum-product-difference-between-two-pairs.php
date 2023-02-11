class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProductDifference($nums) {
        $max1 = -1;
        $max2 = -1;
        $min1 = PHP_INT_MAX;
        $min2 = PHP_INT_MAX;
        
        foreach ($nums as $i) {
            if ($i > $max1) {
                $max2 = $max1;
                $max1 = $i;
            } else if ($i > $max2) {
                $max2 = $i;
            }
            
            if ($i < $min1) {
                $min2 = $min1;
                $min1 = $i;
            } else if ($i < $min2) {
                $min2 = $i;
            }
        }
        
        return ($max1 * $max2) - ($min1 * $min2);
    }
}