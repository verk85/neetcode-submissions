class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let [prod, zeroCount] = [1, 0];

        for (let num of nums){
            if (num !==0){
                prod *= num;
            }else{
                zeroCount++;
            }
        }

        if (zeroCount > 1){
            return new Array(nums.length).fill(0);
        }

        let result = new Array(nums.length);

        for(let i = 0; i< nums.length; i++){
            if (zeroCount === 1) {
                result[i] = nums[i] === 0 ? prod : 0;
            } else {
                result[i] = prod / nums[i];
            }
        }
         return result;
    }
}