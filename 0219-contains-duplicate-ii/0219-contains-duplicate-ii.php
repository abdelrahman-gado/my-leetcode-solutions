class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function containsNearbyDuplicate($nums, $k) {
        
        $map = [];
        
        foreach ($nums as $index => $num) {
            if (array_key_exists($num, $map)) {
                if ($index - $map[$num] <= $k) {
                    return true;
                } else {
                    $map[$num] = $index;
                }
            } else {
                $map[$num] = $index;
            }
        }
        
        
        return false;
    }
}