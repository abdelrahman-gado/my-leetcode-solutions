class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $pivot
     * @return Integer[]
     */
    function pivotArray($nums, $pivot) {
        $smallerArr = [];
        $equalArr = [];
        $greaterArr = [];
        
        foreach ($nums as $num) {
            if ($num < $pivot) {
                $smallerArr[] = $num;
            } elseif ($num > $pivot) {
                $greaterArr[] = $num;
            } else {
                $equalArr[] = $num;
            }
        }
        
        return [...$smallerArr, ...$equalArr, ...$greaterArr];
    }
}