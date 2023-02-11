class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @return Integer[]
     */
    function shuffle($nums, $n) {
        
        $shuffledArr = [];
        for ($i = 0; $i < $n; $i++) {
            $shuffledArr[] = $nums[$i];
            $shuffledArr[] = $nums[$i + $n];
        }
        
        
        return $shuffledArr;
    }
}