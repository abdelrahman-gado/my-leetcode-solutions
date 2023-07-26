class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        $map = [];
        
        foreach ($nums as $num) {
            if (array_key_exists($num, $map)) {
                return true;
            }
            
            $map[$num] = true;
        }
        
        return false;
    }
}