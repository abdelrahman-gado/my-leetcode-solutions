class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        
        $lowerCasedS = strtolower($s);
        $cleanedS = preg_replace("/[\W_]/", "", $lowerCasedS);
        
        $start = 0;
        $end = strlen($cleanedS) - 1;
        
        while ($start < $end) {
            if ($cleanedS[$start] !== $cleanedS[$end]) {
                return false;
            }
            
            $start++;
            $end--;
        }
        
        
        return true;
    }
}