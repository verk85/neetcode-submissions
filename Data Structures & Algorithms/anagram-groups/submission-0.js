class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = {};
        for(let i = 0; i < strs.length; i++){
            let strChars = strs[i].split('').sort().join("");
            if(anagrams[strChars]){
                anagrams[strChars].push(strs[i])
            }else{
                anagrams[strChars] = [strs[i]];
            }
        }
        return Object.values(anagrams)
    }
}
