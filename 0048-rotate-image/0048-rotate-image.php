class Solution {

    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    
    function transpose(&$matrix) {
        $n = count($matrix);
        for ($i = 0; $i < $n; $i++) {
            for ($j = $i + 1; $j < $n; $j++) {
                $tmp = $matrix[$j][$i];
                $matrix[$j][$i] = $matrix[$i][$j];
                $matrix[$i][$j] = $tmp;
            }
        }
        
    }
    
    function reverseRows(&$matrix) {
        $n = count($matrix);
        for ($i = 0; $i < $n; $i++) {
            $arr = $matrix[$i];
            $matrix[$i] = array_reverse($arr);
        }

    }
    
    function rotate(&$matrix) {
        $this->transpose($matrix);
        $this->reverseRows($matrix);
    }
}