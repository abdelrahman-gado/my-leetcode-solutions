class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function characterReplacement($s, $k) {
        
        $res = 0;
        $left = 0;
        $map = [];
        
        for ($i = 0; $i < strlen($s); $i++) {
            
            if (array_key_exists($s[$i], $map)) {
                $map[$s[$i]]++;
            } else {
                $map[$s[$i]] = 1;
            }
            
            $frequentChar = 0;
            foreach($map as $key => $value) {
                if ($value > $frequentChar) {
                    $frequentChar = $value;
                }
            }
            
            $numberOfReplace = ($i - $left + 1) - $frequentChar;
            if ($numberOfReplace <= $k) {
                $res = max($res, ($i - $left + 1));
            } else {
                if ($map[$s[$left]] > 1) {
                    $map[$s[$left]]--;
                } else {
                    unset($map[$s[$left]]);
                }
                $left++;
            }
            
           
            
        }
        
        
        return $res;
    }
}