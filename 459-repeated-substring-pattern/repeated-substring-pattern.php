class Solution 
{

    /**
     * @param String $s
     * @return Boolean
     */
    function repeatedSubstringPattern($s) 
    {
        $sLength = strlen($s);
        $subString = '';
        for ($i = 0; $i < $sLength - 1; $i++) {
            $subString .= $s[$i];
            $repeatedSubstring = $subString;
            while (strlen($repeatedSubstring) <= $sLength) {
                if ($repeatedSubstring === $s) {
                    return true;
                }

                $repeatedSubstring .= $subString;
            }
        }

        return false;    
    }
}