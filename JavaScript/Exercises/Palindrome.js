// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    const reversed = str.split('').reverse().join('');
    return str === reversed;
    }
    
    //Without Using .reverse() Method: 
    function palindrome(str) {
       return str.split('').every((char, i) => {
            return char === str[str.length- i - 1]; 
        });
    }


    
    //Find the LONGEST palindrome 
        // split sentence into words
        // iterate words and collect the palindromes
        // sort the list of palindromes by word length
        // return the largest item in the sorted list
    function findLongestPalindrome(sentence) {

        let palindromes = [];
        let words = sentence.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (isPalindrome(words[i])) {
                palindromes.push(words[i]);
                palindromes.sort(sortAscendingByLength);
            }
        }
        return palindromes.pop();
        
      }