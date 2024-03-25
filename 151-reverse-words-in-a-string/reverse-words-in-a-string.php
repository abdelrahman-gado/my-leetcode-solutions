class Solution 
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s) 
    {
        $s = trim($s);
        $words = explode(' ', $s);
        $wordsListLength = count($words);
        $result = '';

        for ($i = $wordsListLength - 1; $i >= 0; $i--) 
        {
            if ($words[$i] !== '') {
                $result .= $words[$i];
                if ($i !== 0) {
                    $result .= ' ';
                }
            }
        }

        return $result;
    }
}