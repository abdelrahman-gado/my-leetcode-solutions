class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    
    function twoSum($nums, $target) {
        
        $map = [];
        
        $numsLength = count($nums);
        for ($i = 0; $i < $numsLength; $i++) {
            $needed = $target - $nums[$i];
            if (array_key_exists($nums[$i], $map)) {
                return [$map[$nums[$i]], $i];
            }
            
            $map[$needed] = $i;
        }
        
        
        return [];
    }
}