class Solution {

    /**
     * @param Integer[] $numbers
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($numbers, $target) {
        
        $start = 0;
        $end = count($numbers) - 1;
        
        while ($start < $end) {
            $sum = $numbers[$start] + $numbers[$end];
            if ($sum === $target) {
                return [$start + 1, $end + 1];
            } elseif ($sum > $target) {
                $end--;
            } else {
                $start++;
            }
        }
        
        
        return false;
    }
}