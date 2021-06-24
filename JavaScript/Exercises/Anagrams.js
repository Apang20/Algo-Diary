// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cmapA = buildCharMap(stringA);
    const cmapB = buildCharMap(stringB);

    //pull out keys to count and match them
    if(Object.keys(cmapA).length !== Object.keys(cmapB).length) {
        return false; 
    }
    for (let char in cmapA){
        if(cmapA[char] !== cmapB[char]){
            return false
        }
    }
    return true; 
    
}






function buildCharMap(str){
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}







//TWO:
// function anagrams(stringA, stringB) {
// return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str){
//     //sort can only be used on arrays, not strings
//     //takes out any symbols and whitespaces before alphabetizing 
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }


