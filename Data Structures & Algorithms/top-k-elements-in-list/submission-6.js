class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let sNums = nums.sort((a,b)=> a - b)
        let kMostRepeated = [];
        let currentNum = sNums[0];
        let currentNumCount = 0;
        for(let i = 0;  i <= sNums.length; i++){
            if(currentNum !== sNums[i]){
                kMostRepeated.push([currentNum, currentNumCount])
                currentNum = sNums[i];
                currentNumCount = 1;
                continue;
            }
            currentNumCount++;
        }
        if (k===1){
            return [kMostRepeated[0][0]];
        }
        let skMostRepeated = kMostRepeated.sort((a,b)=> b[1] - a[1])
        let result = [];
        for(let i = 0; i < k; i++){
            result.push(skMostRepeated[i][0])
        }
        return result;
    }

}
