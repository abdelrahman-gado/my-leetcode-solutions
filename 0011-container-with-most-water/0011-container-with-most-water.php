class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {
        
        $start = 0;
        $end = count($height) - 1;
        $maxContainer = -1;
        
        while ($start < $end) {
            
            $container = min($height[$start], $height[$end]) * ($end - $start);
            if ($container > $maxContainer) {
                $maxContainer = $container;
            }
            
            if ($height[$start] < $height[$end]) {
                $start++;
            } else {
                $end--;
            }
        }
        
        return $maxContainer;
        
    }
}