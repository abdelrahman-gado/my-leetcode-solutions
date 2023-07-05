class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    
    function getPrefixList($nums, $numsLength): array {
        
        $prefixList = [$nums[0]];
        
        for ($i = 1; $i < $numsLength; $i++) {
            $prefixList[$i] = $prefixList[$i - 1] * $nums[$i];
        }
        
        return $prefixList;
    }
    
    function getPostfixList($nums, $numsLength): array {
        
        $postfixList = [$numsLength - 1 => $nums[$numsLength - 1]];
        
        for ($i = $numsLength - 2; $i >= 0; $i--) {
            $postfixList[$i] = $postfixList[$i + 1] * $nums[$i];
        }
        

        return $postfixList;
    }
    
    
    function productExceptSelf($nums) {
        
        $numsLength = count($nums);
        $outputList = [];
        
        $prefixList = $this->getPrefixList($nums, $numsLength);
        $postfixList = $this->getPostfixList($nums, $numsLength);
        

               
        for ($i = 0; $i < $numsLength; $i++) {
            $prefix = ($i - 1 < 0) ? 1 : $prefixList[$i - 1];
            $postfix = ($i + 1 >= $numsLength) ? 1 : $postfixList[$i + 1];
            
            $outputList[$i] = $prefix * $postfix;
        }
        
        return $outputList;
    }
}