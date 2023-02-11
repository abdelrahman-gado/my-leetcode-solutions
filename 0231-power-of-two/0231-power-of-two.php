class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfTwo($n) {
        if ($n === 0) return false;
        $ex = intval(floor(log($n, 2)));
        return 2 ** $ex === $n;
    }
}