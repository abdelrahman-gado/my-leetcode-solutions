class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfTwo($n) {
        if ($n == 0) {
            return false;
        }
        $ex = floor(log($n, 2));
        return $n == 2 ** $ex;
    }
}