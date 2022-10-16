class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer[][]
     */
    function largestLocal($grid) {
        $locals = [];
        
        
        $startC = 0;
        $endC = $startC + 2;
        
        while ($endC < count($grid)) {
            $list = [];
            
            $startR = 0;
            $endR = $startR + 2;
            
            while ($endR < count($grid)) {
                
                $maximum = -1;
                for ($i = $startR; $i <= $endR; $i++) {
                    for ($j = $startC; $j <= $endC; $j++) {
                        $maximum = max($maximum, $grid[$j][$i]);
                    }
                }
                
                $list[] = $maximum;
                $startR++;
                $endR = $startR + 2;
            }
            
            $locals[] = $list;
            $startC++;
            $endC = $startC + 2;
        }
        
        return $locals;
    }
    
    
}