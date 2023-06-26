class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function checkSubarraySum($nums, $k) {
        
        $numsLength = count($nums);
        
        $map = [0 => -1];
        
        $sum = 0;
        for ($i = 0; $i < $numsLength; $i++) {
            $sum += $nums[$i];
            
            if (!array_key_exists($sum % $k, $map)) {
                $map[$sum % $k] = $i;
            } elseif ($i - $map[$sum % $k] >= 2) {
                return true;
            }
        }
        
        return false;
    }
}