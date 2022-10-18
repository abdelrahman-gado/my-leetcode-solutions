class Solution {

    /**
     * @param String $sentence
     * @return Boolean
     */
    function checkIfPangram($sentence) {
        
        $map = array_fill(0, 26, 0);
        for ($i = 0; $i < strlen($sentence); $i++) {
            $ch = $sentence[$i];
            $map[ord($ch) - ord('a')]++;
        }
        
        foreach ($map as $num) {
            if ($num === 0) {
                return false;
            }
        }
        
        return true;
    }
}