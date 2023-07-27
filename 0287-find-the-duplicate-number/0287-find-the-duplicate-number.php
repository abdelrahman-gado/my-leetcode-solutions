class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findDuplicate($nums) {
        
        $len = count($nums);
        $sortedNums = $nums;
        sort($sortedNums);
        
        for ($i = 0; $i < $len-1; $i++) {
            if ($sortedNums[$i] === $sortedNums[$i + 1]) {
                return $sortedNums[$i];
            }
        }
        
        
        return false;
    }
}