class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    
    function productExceptSelf($nums) {
        
        $numsLength = count($nums);
        $outputList = [];
        $pre = 1;
        $post = 1;
        
        for ($i = 0; $i < $numsLength; $i++) {
            $output[$i] = $pre;
            $pre *= $nums[$i];
        }
        
        for ($i = $numsLength - 1; $i >= 0; $i--) {
            $output[$i] = $output[$i] * $post;
            $post *= $nums[$i];
        }
        
        
        return $output;
    }
}