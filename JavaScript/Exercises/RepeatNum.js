//GIVEN AN ARRAY OF INTEGERS FIND THE MOST REPEATED NUMBER: 
//ie. findMostRepeated([3,3,3,4,4,4,4,6,6,6,1,1,4,4,1,1,1,1,1,1,4,4,4,4,3,4,4,4]) = 4 */

    function maxChar(str) {
        const charMap = {};
        let max = 0;
        let maxChar = '';
    
        for (let char of str) {
            if (charMap[char]) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
    
        for (let char in CharMap) { //key(leters)
            if (charMap[char] > max) { //value(integers)
                max = charMap[char];
                maxChar = char;
            }
        }
        return maxChar;
    }