class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return String
     */
    function minWindow($s, $t) {
        
        if ($t === "") return "";
        
        $tLength = strlen($t);
        $sLength = strlen($s);
        
        $tmap = [];
        $windowMap = [];
        $have = 0;
        $need = 0;
        $res = [];
        $resLength = PHP_INT_MAX;
        
        for ($i = 0; $i < $tLength; $i++) {
            if (array_key_exists($t[$i], $tmap)) {
                $tmap[$t[$i]]++;
            } else {
                $tmap[$t[$i]] = 1;
            }
        }
        
        
        $need = count($tmap);
        $left = 0;
        
        for ($i = 0; $i < $sLength; $i++) {
            if (array_key_exists($s[$i], $windowMap)) {
                $windowMap[$s[$i]]++;
            } else {
                $windowMap[$s[$i]] = 1;
            }
            
            if (array_key_exists($s[$i], $tmap) && $windowMap[$s[$i]] === $tmap[$s[$i]]) {
                $have++;
            }
            
            while ($have === $need) {
                if ($i - $left + 1 < $resLength) {
                    $res = [$left, $i];
                    $resLength = ($i - $left + 1);
                }
                
                $windowMap[$s[$left]]--;
                if (array_key_exists($s[$left], $tmap) && $windowMap[$s[$left]] < $tmap[$s[$left]]) {
                    $have--;
                }
                
                $left += 1;
            }
            
        }
        
        
        if ($resLength === PHP_INT_MAX) {
            return "";
        } else {
            return substr($s, $res[0], $res[1] - $res[0] + 1);
        }
    }
}