class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = {};
        for(let str of strs){
            let strChars = str.split('').sort().join(``);
            if(!anagrams[strChars]){
                anagrams[strChars] = [];
            }
            anagrams[strChars].push(str)
        }
        return Object.values(anagrams)
    }
}
