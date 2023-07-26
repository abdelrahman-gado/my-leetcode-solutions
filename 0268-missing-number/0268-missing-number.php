class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function missingNumber($nums) {
        
        $count = count($nums);
        $foundSum = array_sum($nums);
        $actualSum = 0;
        
        for($i = 0; $i <= $count; $i++) {
            $actualSum += $i;
        }
        
        return $actualSum - $foundSum;
    }
}