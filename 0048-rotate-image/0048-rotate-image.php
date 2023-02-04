class Solution {

    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    function rotate(&$matrix) {
        
        $n = count($matrix);
        
        for ($i = 0; $i < floor(($n + 1) / 2); $i++) { // 0 1
            for ($j = 0; $j < floor($n / 2); $j++) { // 0
                $temp = $matrix[$n - 1 - $j][$i];
                $matrix[$n - 1 - $j][$i] = $matrix[$n - 1 - $i][$n - $j - 1];
                $matrix[$n - 1 - $i][$n - $j - 1] = $matrix[$j][$n - 1 - $i];
                $matrix[$j][$n - 1 - $i] = $matrix[$i][$j];
                $matrix[$i][$j] = $temp;
            }
        }
        
        
        return $matrix;
    }
}