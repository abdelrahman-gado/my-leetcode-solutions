class Solution {

    /**
     * @param String $s
     * @return String
     */
    function shortestPalindrome($s) 
    {
        if ($this->isPlaindrome($s)) {
            return $s;
        }

        $sLength = strlen($s);
        $characters = '';
        for ($i = $sLength - 1; $i >= 0; $i--) {
            $characters .= $s[$i];
            $newS = $characters . $s;
            if ($this->isPlaindrome($newS)) {
                return $newS;
            }
        }

        return $newS;
    }

    function isPlaindrome($s) 
    {
        return $s === strrev($s);
    }
}