class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer
     */
    function findCenter($edges) {
        
        $map = [];
        for ($i = 0; $i < count($edges); $i++) {
            for ($j = 0; $j < count($edges[$i]); $j++) {
                
                if (!isset($map[$edges[$i][$j]])) {
                    $map[$edges[$i][$j]] = 1;
                } else {
                    $map[$edges[$i][$j]]++;
                }
            }        
        }
        
        foreach ($map as $key => $value) {
            if ($value === count($edges)) {
                return $key;
            }
        }
        
        
        return -1;
    }
        
}
