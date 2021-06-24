/* --- Directions
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
--- Examples
vowels('Hi There!') --> 3
vowels('Why do you ask?') -->vowels('Why?') --> 0 */









function vowels(str) {

    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
} 



















/*SOLUTION - 2

function vowels(str) {
    let counter = 0
    const check = "aeiou" 
    OR 
    const check = ['a', 'b', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (check.includes(char)) {
            counter++
        }
    }
    return counter
}
*/
