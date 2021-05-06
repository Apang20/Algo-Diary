function isAnObject(input) {
    // create an isObject variable
    // assign it to whether the input is an object type
    // create an isNotAnArray variable
    // assign it to whether the input is not an array
    // create an isObjectAndNotAnArray variable
    // assign it to a combination of isObject AND isNotAnArray
    // return the isObjectAndNotAnArray variable
    var isObject = typeof input === "object"
    var isNotAnArray = !Array.isArray(input);
    var isObjectAndNotAnArray = isObject && isNotAnArray;
  
    return isObjectAndNotAnArray;
  }
  
  
  
  //Add any keys that are not in the 1st object 
  //If the 1st object already has a given key, ignore it/do not overwrite it
  //Do not modify the 2nd object at all 
  function extend(obj1, obj2) {
  
    for (let keyFromObj2 in obj2) {
      if (obj1[keyFromObj2] === undefined) {
        obj1[keyFromObj2] = obj2[keyFromObj2]
      }
    }
  }
  /*TEST: 
  var obj1 = {
      a: 1,
      b: 2
    };
    var obj2 = {
      b: 4,
      c: 3
    };
    extend(obj1, obj2);
    
    console.log(obj1); // --> {a: 1, b: 2, c: 3}
    console.log(obj2); // --> {b: 4, c: 3} */
  
  function removeArrayValues(obj) {
    for (let key in obj) {
  
      if (Array.isArray(obj[key]) === true) {
        delete obj[key];
      }
    }
  }
  /*
  let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); --> { b: 2 } */
  
  function removeNumberValues(obj) {
    for (let key in obj) {
      if (typeof (obj[key]) === "number") {
        delete obj[key];
      }
    }
  }
  
  function removeNumbersLessThan(num, obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number" && obj[key] < num) {
        delete obj[key];
      }
    }
  }
  //TEST: 
  //   let obj = {
  //     a: 8,
  //     b: 2,
  //     c: 'montana'
  //   }
  //   removeNumbersLessThan(5, obj);
  //   console.log(obj);  --> { a: 8, c: 'montana' }
  
  function countNumberOfKeys(obj) {
    let count = 0;
    for (let key in obj) {
      count += 1;
  
    }
    return count;
  }
  //TEST
  // let obj = { a: 1, b: 2, c: 3};
  //   let output = countNumberOfKeys(obj);
  //   console.log(output);  --> 3
  
  
  function removeOddValues(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 1) {
        delete obj[key];
      }
    }
  }
  //TEST
  // let obj = {a: 2, b: 3,c: 4};
  //   removeOddValues(obj);
  //   console.log(obj); --> { a: 2, c: 4 }

  
  