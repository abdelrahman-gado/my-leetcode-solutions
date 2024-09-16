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

        $zerosPlaces = [];
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($matrix[$i][$j] === 0) {
                    $zerosPlaces[] = [$i, $j];
                }
            }
        }

        foreach ($zerosPlaces as $point) {
            // zeros the row
            for ($k = 0; $k < $n; $k++) {
                $matrix[$point[0]][$k] = 0;
            }

            // zeros the col
            for ($l = 0; $l < $m; $l++) {
                $matrix[$l][$point[1]] = 0;
            }
        }

        return $matrix;
    }
}