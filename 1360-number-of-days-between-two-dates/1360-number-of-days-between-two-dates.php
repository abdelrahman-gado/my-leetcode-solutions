class Solution {

    /**
     * @param String $date1
     * @param String $date2
     * @return Integer
     */
    
    function daysBetweenDates($date1, $date2) {        
        $d1 = new DateTime($date1);
        $d2 = new DateTime($date2);
        return $d1->diff($d2)->format("%a");
    }
}