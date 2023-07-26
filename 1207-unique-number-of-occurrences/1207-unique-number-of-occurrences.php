class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function uniqueOccurrences($arr) {
        
        $occurArr = [];
        
        for ($i = 0; $i < count($arr); $i++) {
            if (array_key_exists($arr[$i], $occurArr)) {
                $occurArr[$arr[$i]]++;
            } else {
                $occurArr[$arr[$i]] = 1;
            }
        }
        
        
        $map = [];
        
        foreach($occurArr as $n) {
            if (array_key_exists($n, $map)) {
                return false;
            } else {
                $map[$n] = true;
            }
        }
        
        return true;
    }
}