class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMiddleIndex($nums) 
    {
        $numsLength = count($nums);
        $totalSum = array_sum($nums);
        
        $sumList = [];
        
        for ($i = 0; $i < $numsLength; $i++) {
            $prevSum = ($i - 1 < 0) ? 0 : $sumList[$i - 1];
            $currentSum = $prevSum + $nums[$i];
            if ($prevSum === ($totalSum - $currentSum)) {
                return $i;
            }
            
            $sumList[$i] = $currentSum;
        }
        
        var_dump($sumList, $totalSum);
        return -1;
    }
}