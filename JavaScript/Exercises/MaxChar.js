// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

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





// function countWords(str) {

//     if (str === "") {
//         return {}; 
//     }
//       var result = {}; 
//       var words = str.split(" ");

//       for (var i = 0; i < words.length; i++) {
//           if (result[words[i]] === undefined) {
//               result[words[i]] = 1; 
//           } else {
//               result[words[i]] +=1; 
//           }
//       }
//       return result; 
//     }


// function countChar(str) {
//     let myObj= {};
//     for (let s of str) {
//         if ( myObj[s] ? myObj[s].count ++ : myObj[s] = { count : 1 } );
//     }
//     return myObj;
// }

// var charCount = countChar('abcceddd');
