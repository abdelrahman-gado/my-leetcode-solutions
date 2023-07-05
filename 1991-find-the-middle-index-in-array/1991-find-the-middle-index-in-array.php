class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMiddleIndex($nums) 
    {
        $numsLength = count($nums);
        $leftSum = 0;
        
        for ($i = 0; $i < $numsLength; $i++) {
            
            $rightSum = 0;
            for ($j = $i + 1; $j < $numsLength; $j++) {
                $rightSum += $nums[$j];
            }
            
            if ($rightSum === $leftSum) {
                return $i;
            }
            
            $leftSum += $nums[$i];
        }
        
        
        return -1;
    }
}