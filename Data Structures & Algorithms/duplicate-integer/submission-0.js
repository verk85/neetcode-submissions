class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // Need to traverse the array and return false as soon as an element is duplicated
    // other wise returns false

    hasDuplicate(nums) {
        let elements = new Set();
        for (let i = 0; i < nums.length; i++){
            if (elements.has(nums[i])){
                return true;
            }
            elements.add(nums[i])
        }
        return false;
    }
}
