class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    
    // we need to store complemental values based on the nums and target
    twoSum(nums, target) {
        let complements = {};
        for(let i = 0; i < nums.length; i++){
            if(complements[nums[i]] !== undefined){
                return [complements[nums[i]],i]
            }
            complements[target - nums[i]] = i;
        }
        return [];
    }
}
