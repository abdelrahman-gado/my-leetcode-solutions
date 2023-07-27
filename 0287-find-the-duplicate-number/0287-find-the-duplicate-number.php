class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findDuplicate($nums) {
        
        $map = [];
        
        for ($i = 0; $i < count($nums); $i++) {
            if (array_key_exists($nums[$i], $map)) {
                return $nums[$i];
            } else {
                $map[$nums[$i]] = true;
            }
        }
        
        return false;
    }
}