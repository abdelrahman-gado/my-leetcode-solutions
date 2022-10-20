class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $diff
     * @return Integer
     */
    function arithmeticTriplets($nums, $diff) {
        $count = 0;
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                for ($k = $j + 1; $k < count($nums); $k++) {
                    if ($nums[$j] - $nums[$i] === $diff && $nums[$k] - $nums[$j] === $diff) {
                        $count++;
                    }
                }
            }
        }
        
        return $count;
    }
}