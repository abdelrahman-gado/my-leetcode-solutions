class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfTwo($n) {
        $num = $n;
        if ($num === 1) {
            return true;
        }
        
        $ex = 0;
        while ($num > 1) {
            $num = floor($num / 2);
            $ex++;
        }
        
        return 2 ** $ex == $n;
    }
}