//Find the LONGEST palindrome 
// split sentence into words
// iterate words and collect the palindromes
// sort the list of palindromes by word length
// return the largest item in the sorted list


// FUNCTION DEFINITION(S)
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


function reverseString(string) {
    let string = string.split('');
    let reversed = string.reverse();
    let joined = reversed.join('');

    return joined;
    // let result = string.split('').reverse().join('');
    // return result; 

}

function isPalindrome(word) {
    //Detect palindromes by comparing a string to its reverse
    if (word !== reverseString(word)) {
        return false;
    }
    return true;
}

function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    }
    return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('failed [' + testName + ']');
    }
}

function assertArraysEqual(actual, expected, testName) {
    let areEqualLength = actual.length === expected.length;
    let areEqualValue = true;
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) {
            areEqualValue = false;
        }
    }
    if (areEqualLength && areEqualValue) {
        console.log('passed');
    } else {
        console.log('failed: [' + testName + ']');
    }
}

// TEST LONGEST PALINDROME
let sentence = 'bob anna hannah';
let actualResult = findLongestPalindrome(sentence);
let expectedResult = 'hannah'
assertEqual(actualResult, expectedResult, 'should return the longest palindrome in the array');

// TEST REVERSE STRING
var inputString = "ichom";
var actualResult = reverseString(inputString);
var expectedResult = "mochi";
assertEqual(actualResult, expectedResult, 'should reverse and return the input string');

// TEST IS PALINDROME
var word = 'racecar';
var atualResult = isPalindrome(word);
var expectedResult = true;
assertEqual(actualResult, expectedResult, 'should return true for a valid palindrome');
