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


/*Write a function shoppingSummary which accepts an array of 
shopping items (objects), and returns a string with the number 
of items you bought, and the total amount you spent.

-You cannot spend more than your budget ($100).
-You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
-The list is mentioned to be in "decreasing priority" simply because you 
do not have to sort the input array to optimize for anything else. 
-So do not worry about coming up with any other sorting algorithm for 
the most "bang for your buck" 

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
*/

function shoppingSummary(list) {
  //input - array of obj
  //output - string
  var items = 0;
  var price = 0; 
  
  for (var i = 0; i < list.length; i++) {
      if (price + list[i].price < 100) {
          items++
          price+= list[i].price;
      }
  }
  return "I got " + items + " items at $" + price;
  
}