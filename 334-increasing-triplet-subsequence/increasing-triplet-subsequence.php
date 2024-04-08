class Solution 
{

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function increasingTriplet($nums) 
    {
        $length = count($nums);

        if ($length < 3) {
            return false;
        }

        $first = $second = PHP_INT_MAX;
        for ($i = 0; $i < $length; $i++) {
            if ($nums[$i] <= $first) {
                $first = $nums[$i];
            } elseif ($nums[$i] <= $second) {
                $second = $nums[$i];
            } else {
                return true;
            }
        }

        return false;
    }
}