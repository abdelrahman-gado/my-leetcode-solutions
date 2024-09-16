class Solution {

    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    function setZeroes(&$matrix) {
        $m = count($matrix);
        if ($m === 0) {
            return [];
        }

        $n = count($matrix[0]);

        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($matrix[$i][$j] === 0) {
                    $matrix[$i][$j] = 'a';
                }
            }
        }

        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($matrix[$i][$j] === 'a') {
                    $matrix[$i][$j] = 0;
                    // zeros the row
                    for ($k = 0; $k < $n; $k++) {
                        if ($matrix[$i][$k] !== 'a'){
                            $matrix[$i][$k] = 0;
                        }
                    }
    
                    // zeros the col
                    for ($l = 0; $l < $m; $l++) {
                        if ($matrix[$l][$j] !== 'a') {
                            $matrix[$l][$j] = 0;
                        }
                    }
                }
            }
        }

        return $matrix;
    }
}