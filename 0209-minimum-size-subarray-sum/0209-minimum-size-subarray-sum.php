class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $nums
     * @return Integer
     */
    function minSubArrayLen($target, $nums) {
        
        $numsLen = count($nums);
        
        $left = 0;
        
        $minLen = PHP_INT_MAX;
        
        $sum = 0;
        for ($i = 0; $i < $numsLen; $i++) {
            
            
            $sum += $nums[$i];
            
            while ($sum >= $target) {
                if ($i - $left + 1 < $minLen) {
                    $minLen = $i - $left + 1;
                }
                $sum -= $nums[$left];
                $left++;
            }
            
        }
        

       
        
        return $minLen === PHP_INT_MAX ? 0 : $minLen;
    }
}