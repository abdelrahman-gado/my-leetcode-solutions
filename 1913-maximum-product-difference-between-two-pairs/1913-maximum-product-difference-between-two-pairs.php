class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProductDifference($nums) {
        $len = count($nums);
        sort($nums);
        return ($nums[$len-1] * $nums[$len-2]) - ($nums[0] * $nums[1]); 
    }
}