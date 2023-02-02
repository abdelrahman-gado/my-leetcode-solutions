/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    const set1 = new Set();
    const set2 = new Set();
    const arr = [];
    
    for (let i of nums1) {
        set1.add(i);
    }
    
    for (let i of nums2) {
        set2.add(i);
    }
    
    for (let i of set1) {
        if (set2.has(i)) {
            arr.push(i);
        }
    }
    
    return arr;
};