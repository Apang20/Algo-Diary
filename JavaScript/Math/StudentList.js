/*
Write a function called decorateClassListWithAges.
 Convert from an array, in this case a class list of names, 
 to an array of object literals decorated with a name and an age 
 for each student. Your decorateClassListWithAges function should use 
 the provided getRandomIntInclusive as part of its solution. 
 (The ages should be randomly generated for each student, either age 10 or age 11)
 

 //Sample Output:

let classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

let classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function decorateClassListWithAges(classList) {
    // creates an object for each string in the input array, with an age of 10 or 11
    // returns an array of these objects
    let decorateClassList = [];
    for (let i = 0; i < classList.length; i++) {
        let obj = {
            name: classList[i],
            age: getRandomIntInclusive(10,11)
        };
        decorateClassList.push(obj)
    }
    return decorateClassList; 
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertWithinRange(high, low, actual, testName) {
      let withinRange = low <= actual && actual <= high
      if (withinRange) {
           console.log('passed');
      } else {
          console.log('FAILED...')
  }
  }
  // TESTS CASES
  let classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
  "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
  "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
  
  let decoratedList = decorateClassListWithAges(classList)
  for (let i = 0; i < classList.length; i++) {
      assertWithinRange(10, 11, decoratedList[i].age)
  }
  