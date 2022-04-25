/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21 */

let resultFinal = [];

function converter(num1){

    let numberConverter = num1.toString();
    let numberConverterTwo = numberConverter.split("");
    let finalNumber = numberConverterTwo.reverse();
    
        for(i = 0; i <= finalNumber.length - 1; i++){
            if(finalNumber[0] === 0){
                continue;
            }
            else if(i > 0){
                resultFinal.push(finalNumber[i])
            }
        }
    let versionBeta = resultFinal.join("").toInteger();
    return versionBeta;
;}