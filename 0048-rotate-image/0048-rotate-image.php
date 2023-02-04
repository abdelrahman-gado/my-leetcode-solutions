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
        
        return $matrix;
    }
    
    function reorder(&$matrix) {
        $n = count($matrix);
        
        for ($i = 0; $i < $n; $i++) {
            $matrix[$i] = array_reverse($matrix[$i]);
        }
        
        return $matrix;
    }
    
    function rotate(&$matrix) {
        $matrix = $this->transpose($matrix);   
        return $this->reorder($matrix);
    }
}