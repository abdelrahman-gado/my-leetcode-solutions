class Solution 
{

    /**
     * @param Integer[] $flowerbed
     * @param Integer $n
     * @return Boolean
     */
    function canPlaceFlowers($flowerbed, $n) 
    {
        $flowerbedLength = count($flowerbed);
        $flowerbedCopy = $flowerbed;
        $plots = $n;

        $prev = 0;
        for ($i = 0; $i < $flowerbedLength - 1; $i++) {
            if (!$prev && !$flowerbedCopy[$i] && !$flowerbedCopy[$i+1]) {
                $flowerbedCopy[$i] = 1;
                $plots--;
            }

            $prev = $flowerbedCopy[$i];
            
            if ($plots == 0) {
                return true;
            }
        }

        if (!$prev && !$flowerbedCopy[$flowerbedLength-1]) {
            $plots--;
        }

   

        return $plots <= 0;
    }
}