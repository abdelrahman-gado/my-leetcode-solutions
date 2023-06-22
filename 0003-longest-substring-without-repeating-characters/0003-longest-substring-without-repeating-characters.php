class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        
        $longestSubstringLength = 0;
        $leftPointer = 0;
        $set = [];
        
        $sLength = strlen($s);
        for ($i = 0; $i < $sLength; $i++) {
            while (array_key_exists($s[$i], $set)) {
                unset($set[$s[$leftPointer]]);
                $leftPointer++;
            }
            
            $set[$s[$i]] = 1;
            $longestSubstringLength = max($longestSubstringLength, $i - $leftPointer + 1);
        }
        
        
        return $longestSubstringLength;
        
    }
}