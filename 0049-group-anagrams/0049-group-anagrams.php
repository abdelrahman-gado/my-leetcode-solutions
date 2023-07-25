class Solution {

    /**
     * @param String[] $strs
     * @return String[][]
     */
    
    function getHash($str) {
        
        $arrChars = str_split($str);
        sort($arrChars, SORT_STRING);
        $hashStr = implode("", $arrChars);
        
        return $hashStr;
    }
    
    
    function groupAnagrams($strs) {
        
        $map = [];
        $strsLen = count($strs);
        
        for ($i = 0; $i < $strsLen; $i++) {
            $hash = $this->getHash($strs[$i]);
            if (!array_key_exists($hash, $map)) {
                $map[$hash] = [$strs[$i]];
            } else {
                $map[$hash][] = $strs[$i];
            }
        }
        
        $result = [];
        foreach ($map as $value) {
            $result[] = $value;
        }
        
        return $result;
    }
}