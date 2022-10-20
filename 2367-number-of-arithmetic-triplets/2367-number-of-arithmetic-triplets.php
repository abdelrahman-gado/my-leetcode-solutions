class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $diff
     * @return Integer
     */
    function arithmeticTriplets($nums, $diff) {
        $count = 0;
        for ($i = 0; $i < count($nums); $i++) {
            $second = null;
            for ($j = $i + 1; $j < count($nums); $j++) {
                if ($second === null && $nums[$j] - $nums[$i] === $diff) {
                    $second = $nums[$j];
                    continue;
                } 
                
                if (isset($second) && $second !== null && $nums[$j] - $second === $diff) {
                    $count++;
                }                
            }
        }
        
        return $count;
    }
}