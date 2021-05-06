function countWords(stringOfWords){

    if (stringOfWords === '') {
    return {};
    }
    let counts = {};
    
    let words = stringOfWords.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
    
    if (counts[currentWord] === undefined) {
      counts[currentWord] = 1;
    
    } else {
    
    counts[currentWord]++;
     }
    }
}
// let result1 = countWords('ask a bunch get a bunch');
// console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

// let result2 = countWords('');
// console.log('should log "{}":', result2);


function countAllCharacters(string) {
  
    if (string === ' ') {
        return {};
    }
    let count = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        
       if (count[char] === undefined) {
           count[char] = 1;
       } else {
           count[char]++;
       }
    }
    return count;
  }

// let result1 = countAllCharacters('banana');
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);

// let result2 = countAllCharacters('');
// console.log('should log "{}":', result2);

function getIndexOf(char, str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
  }
  //TEST: 
//let output = getIndexOf('a', 'I am a hacker');
//console.log(output); --> 2


function splitPairs(input) {
  //split input string into pairs of characters
    //if length is odd, replace the missing second char with _
    //empty string = empty array
    
    if (input.length === 0) {
        return [];
    }
    
    let resultPair = [];
    for (let i = 0; i < input.length; i+=2) {
        if (input[i + 1] === undefined) {
            input += "_";
        }
        resultPair.push(input[i] + input[i + 1]);
    }
    return resultPair;
}

function findMinLengthOfThreeWords(word1, word2, word3) {
    let array = [word1, word2, word3];
    let minLength = word1.length; 
    
    for (let i = 1; i < array.length; i++) {
       if (array[i].length < minLength) {
           minLength = array[i].length;
       }
    }
    return minLength;
  }


  function findMaxLengthOfThreeWords(word1, word2, word3) {
    let array = [word1, word2, word3];
    let maxLength = word1.length;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    return maxLength;
  }

  function getLongestOfThreeWords(word1, word2, word3) {
  //If there is a tie, it should return the first word in the tie.

    let words = [word1, word2, word3];
     let longest = words[0];
     
     for ( let i = 1; i < words.length; i++) {
         if ( words[i].length > longest.length ) {
             longest = words[i];
         }
     }
     return longest; 
   }

   function findShortestOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3];
    let shortest = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest; 
  }
  word1 = "car"
  word2 = "restaurant"
  word3 = "mouse"
  
  function findShortestOfThreeWords(word1, word2, word3) {
      if (word1.length < word2.length && word1.length < word3.length) {
          return word1
      } else if (word2.length < word1.length && word2.length < word3.length) {
          return word2
      } else {
          return word3
      }
  }

  function verify(i){
      console.log(i)
  }
results = findShortestOfThreeWords(word1, word2, word3)
// let output = findShortestOfThreeWords('a', 'two', 'three');
//console.log(output); --> 'a'


