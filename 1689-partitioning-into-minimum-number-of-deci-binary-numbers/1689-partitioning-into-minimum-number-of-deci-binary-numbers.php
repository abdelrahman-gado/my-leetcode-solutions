class Solution {

    /**
     * @param String $n
     * @return Integer
     */
    function minPartitions($n) {
        return max(array_map(fn($val) => intval($val), str_split($n)));
    }
}