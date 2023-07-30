class Solution {

    /**
     * @param String[] $words
     * @param String $order
     * @return Boolean
     */
    function isAlienSorted($words, $order) {
        
        $wordsLen = count($words);
        $orderLen = strlen($order);
        $map = [];
        
        for ($i = 0; $i < $orderLen; $i++) {
            $map[$order[$i]] = $i;
        }
        
        $minLen = 0;
        for ($i = 0; $i < $wordsLen; $i++) {
            $wordLen = strlen($words[$i]);
            if ($wordLen < $minLen)
                $minLen = $wordLen;
        }
        
        
        
        for ($i = 0; $i < $wordsLen-1; $i++) {
            for ($j = 0; $j < strlen($words[$i]); $j++) {
                
                if ($j >= strlen($words[$i + 1])) return false;
                
                if ($words[$i][$j] != $words[$i + 1][$j]) {
                    if ($map[$words[$i][$j]] > $map[$words[$i + 1][$j]]) {
                        return false;
                    } else {
                        break;
                    }
                }
                
                
            }
        }
        
        
        return true;
    }
}