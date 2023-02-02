class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProductDifference($nums) {
        $sortedNums = $nums;
        sort($sortedNums);
        $len = count($nums);
        return ($sortedNums[$len-1] * $sortedNums[$len-2]) - ($sortedNums[0] * $sortedNums[1]);
    }
}