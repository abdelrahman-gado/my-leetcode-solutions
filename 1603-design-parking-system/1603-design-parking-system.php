class ParkingSystem {
    /**
     * @param Integer $big
     * @param Integer $medium
     * @param Integer $small
     */
    
    private $parking = [];
    
    function __construct($big, $medium, $small) {
        $this->parking[1] = $big;
        $this->parking[2] = $medium;
        $this->parking[3] = $small;
    }
  
    /**
     * @param Integer $carType
     * @return Boolean
     */
    function addCar($carType) {
        if ($this->parking[$carType] > 0) {
            $this->parking[$carType] -= 1;
            return true;
        } else {
            return false;
        }
    }
}


// // Your ParkingSystem object will be instantiated and called as such:
//  $obj = ParkingSystem($big, $medium, $small);
//  $ret_1 = $obj->addCar($carType);
 