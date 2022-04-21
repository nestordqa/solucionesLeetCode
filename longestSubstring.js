/*Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

let prototypeOfResult = [];

function subs(s){
    let separador = s.split("");
        
    for(i = 0; i < (separador.length - separador.length + 1); i++){

        prototypeOfResult.push(separador[i])

            for(j = 0; j <= separador.length; j++){
            
                if(separador[j] === separador[i]){
                    continue;
                    }

                else if(separador[j] !== separador[i]){
                    if(prototypeOfResult.includes(separador[j])){
                        continue;
                    }
                    else{
                        prototypeOfResult.push(separador[j]);
                    }
                    }

            }

    }
    return prototypeOfResult.toString("");
}