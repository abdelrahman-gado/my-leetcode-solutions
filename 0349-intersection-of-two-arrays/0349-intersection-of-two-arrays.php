class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function intersection($nums1, $nums2) {
        
        $map = [];
        $resultMap = [];
        foreach($nums1 as $n1) {
            if (!isset($map[$n1])) {
                $map[$n1] = $n1;
            }
        }
        
        foreach($nums2 as $n2) {
            if (isset($map[$n2]) && $map[$n2] == $n2) {
                $resultMap[$map[$n2]] = true;
            }
        }
        
        
        $arr = [];
        foreach ($resultMap as $key => $val) {
            $arr[] = $key;
        }
        
        return $arr;
    }
}