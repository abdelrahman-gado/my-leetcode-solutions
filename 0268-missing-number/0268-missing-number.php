class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function missingNumber($nums) {
        
        $n = count($nums);
        $sortedNums = $nums;
        sort($sortedNums);
        
        $i = 0;
        while ($i <= $n) {
            if ($i !== $sortedNums[$i]) {
                return $i;
            }
            
            $i++;
        }
        
        return null;
    }
}