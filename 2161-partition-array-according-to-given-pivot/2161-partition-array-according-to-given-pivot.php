class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $pivot
     * @return Integer[]
     */
    function pivotArray($nums, $pivot) {
        $pvArr = [];
        foreach ($nums as $num) {
            if ($num < $pivot) {
                $pvArr[] = $num;
            }
        }
        
        foreach ($nums as $num) {
            if ($num === $pivot) {
                $pvArr[] = $num;
            }
        }
        
        foreach ($nums as $num) {
            if ($num > $pivot) {
                $pvArr[] = $num;
            }
        }
        
        return $pvArr;
    }
}