function IsArray(input) {
    let result = Array.isArray(input);
    return result;
  }


  function getLastElement(array) {
    // create a lastIndex variable
    // assign it to the last index in the array
    // create a lastElement variable
    // assign it to the last element in the string (make use of lastIndex)
    // return the lastElement variable
   var lastIndex = array.length-1;
   var lastElement = array[lastIndex];
   return lastElement;
  }



  function applySplice(array, index, item1, item2) {
    // remove two elements from the array at the index given, and adds item1 and item2 in their place
    // return the array
    array.splice(index, 2, item1, item2);
    return array;
  }
  


  function applyUnshiftAgain(arrayOfArrays, index, element) {
    // add the element to the front of the inner array within the array of arrays located at the index
    // return the array of arrays
    arrayOfArrays[index].unshift(element);
    return arrayOfArrays;
  }



  function isArrinObj(inputObj, key) {
    // create a result variable
    // assign it to a call to the applicable method
    // return the result variable
    let result = Array.isArray(inputObj[key]);
    return result; 
  }

  
  function removeAPropertyAgain(arrayOfObjects, index, key) {
    // remove the property at the given key from the object at the given index
    // return the input array of objects
    delete arrayOfObjects [index][key];
    return arrayOfObjects; 
  }


  function countCharacter(str, char) {
    let count = 0;
      for (let i = 0; i < str.length; i++) {
          if (str[i] === char) {
              count++;
          }
      }
      return count; 
    }
//let output = countCharacter('I am a hacker', 'a');
//console.log(output); --> 3

function getAllElementsButNth(array, n) {
  array.splice(n,1)
  return array; 
}
// let output = getAllElementsButNth(['a', 'b', 'c'], 1);
//console.log(output); --> ['a', 'c']

function filterEvenLengthWords(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
      if (words[i].length % 2 === 0) {
          result.push(words[i]);
      }
  }
  return result; 
}
// let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); --> ['word', 'word']

function getLengthOfLongestElement(arr) {
    
  if (arr.length === 0) {
      return 0;
  }

let longest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
return longest.length; 
}
// let output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); 

function transformArrayToObject(array) {
  var obj = {};
  for (let i = 0; i < array.length; i++) {
  
  let key = array[i][0];
  let value = array[i][1];
  obj[key] = value;
  
 }
 return obj;
 }


 function assertArraysEqual(actual, expected, testName) {
  let areEqualLength = actual.length === expected.length; 
  
  let areEqualItems = true;
  for (let i = 0; i < expected.length; i ++) {
      if (expected[i] !== actual[i]) {
          areEqualItems = false; 
      }
  }
  if (areEqualLength && areEqualItems) {
      console.log('passed');
  } else {
      console.log ('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
 }