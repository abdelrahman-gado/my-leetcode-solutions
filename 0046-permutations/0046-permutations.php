class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    
    public array $arrs = [];
    
    function backtrack($nums, $curArr) {
        
        if (count($curArr) === count($nums)) {
            $this->arrs[] = $curArr;
            return;
        }
        
        foreach ($nums as $num) {
            if (!in_array($num, $curArr)) {
                $curArr[] = $num;
                $this->backtrack($nums, $curArr);
                array_pop($curArr);
            }
        }
    }
    
    function permute($nums) {
        $this->backtrack($nums, []);
        return $this->arrs;
    }
}