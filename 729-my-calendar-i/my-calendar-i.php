class MyCalendar 
{
    private array $bookings;
    /**
     */
    function __construct() 
    {
        $this->bookings = [];
    }
  
    /**
     * @param Integer $start
     * @param Integer $end
     * @return Boolean
     */
    function book($start, $end) 
    {
        $bookingCount = count($this->bookings);
        if ($bookingCount === 0) {
            $this->bookings[] = [$start, $end];
            return true;
        }

        foreach ($this->bookings as $booking) {
            if ($start < $booking[1] && $end > $booking[0]) {
                return false;
            }
        }

        $this->bookings[] = [$start, $end];
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * $obj = MyCalendar();
 * $ret_1 = $obj->book($start, $end);
 */