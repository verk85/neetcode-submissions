class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let oNums = {};
        for(let i = 0;  i < nums.length; i++){
            oNums[nums[i]] = (oNums[nums[i]] || 0) + 1;
        }
        let sortedONums = Object.entries(oNums).sort((a,b)=> b[1] - a[1]);
        if (sortedONums.lenght ===1 ){
            return sortedONums[0][0];
        }
        return sortedONums.slice(0,k).map(nums => nums[0]);
    }

}
