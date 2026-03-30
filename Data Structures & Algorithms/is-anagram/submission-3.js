class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // string has to have same number of chars and same times;
    isAnagram(s, t) {
        const sLength = s.length;
        const tLength = t.length;

        if (sLength !== tLength){
            return false;
        }
        let sCharMap = new Map();
        for(let i = 0; i < sLength; i++){
            let val = 0;
            if (sCharMap.has(s[i])){
                val = sCharMap.get(s[i]);
                sCharMap.set(s[i], val + 1);
            }else{
                sCharMap.set(s[i], 1);
            }
        }
        for(let i = 0; i < tLength; i++){
            if (sCharMap.has(t[i])){
                let val = sCharMap.get(t[i]);
                if (val > 0){
                    sCharMap.set(t[i], val - 1);
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }    
    return true;
    }
}
