/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
*/

// ------ FIRST SOLUTION
// const romans = "MCMXCIV"

// const romanToInt = function(s) {
//     const mapElements = new Map ([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    
//     const newS = s.split("").map(elem => {
//         for (const [key, value] of mapElements) {
//             if(elem === key){
//                 return value
//             } 
//         }
//     }).reduce((acc, elem, i, arr) => {
//         if (elem >= arr[i + 1] || i === arr.length - 1) {
//             acc += elem;
//         } else {
//             acc -= elem
//         }
//         return acc;
//     }, 0)
//     return newS;
// };

// console.log(romanToInt(romans))

// ------ SECOND SOLUTION
const romans = "MCMXCIV"

var romanToInt = function(s) {
    //creating a object for comparison
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    //accumulative variable that will hold the final value
    let romansCounter = 0;
    for (let i = 0; i < s.length; i++) {
        //iterating over the string
        /*using enhanced object properties to compare and retrieve values from the object
        given the current element of the string*/
        let curr = romans[s[i]];
        let next = romans[s[i + 1]];
        /*the core logic of the problem. If the current element value is greater than the next element, then it will 
        be add in the accumulative variable as a positive value, in the other hand, if the current element is lower than the next
        it will be add in the accumulative variable as a negtive value*/
        if (curr >= next || i === s.length - 1) {
            romansCounter += curr;
        } else {
            romansCounter -= curr
        }
        //the final value will be a result of the sum and subtraction of the values with the result value stored in the accumulative variable
    }
    return romansCounter;
}

console.log(romanToInt(romans))
