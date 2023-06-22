class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        
        $longestSubstringLength = 0;
        $set = [];
        
        $sLength = strlen($s);
        for ($i = 0; $i < $sLength; $i++) {
            if (!in_array($s[$i], $set)) {
                $set[] = $s[$i];
            } else {
                if (count($set) > $longestSubstringLength) {
                    $longestSubstringLength = count($set);
                }
                
                $set[] = $s[$i];
                $j = 0;
                while ($set[$j] !== $s[$i]) {
                    array_shift($set);
                }
                array_shift($set);
            }
        }
        
        if (count($set) > $longestSubstringLength) {
            $longestSubstringLength = count($set);
        }
        
        return $longestSubstringLength;
        
    }
}