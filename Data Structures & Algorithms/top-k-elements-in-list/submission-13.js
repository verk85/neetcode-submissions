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
        let arrayONums = Object.entries(oNums);
        if (arrayONums.lenght === 1 ){
            return arrayONums[0][0];
        }
        let sortedONums = arrayONums.sort((a,b)=> b[1] - a[1]);
        return sortedONums.slice(0,k).map(nums => nums[0]);
    }

}
