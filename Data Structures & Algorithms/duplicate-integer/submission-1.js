class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // Need to traverse the array and return false as soon as an element is duplicated
    // other wise returns false

    hasDuplicate(nums) {
        let elements = new Set(nums);
        return elements.size !== nums.length;
    }
}