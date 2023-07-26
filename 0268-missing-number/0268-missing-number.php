class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function missingNumber($nums) {
        
        $count = count($nums);
        sort($nums);
        $i = 0;
        
        
        foreach ($nums as $num) {
            if ($i !== $num) {
                return $i;
            }
            
            $i++;
        }
        
        
        return $i;
    }
}