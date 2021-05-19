//Fashion Cataloge 
let currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

/* 
PART A -

Write a function that will take in this currentInventory array as its argument. 
Your function should access all the shoes across each designer  
Return them out in a flat list: 
{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

Example of a flat list in code: 
let flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);


Psuedocode:  
-Input: Array of two objects (with an array of shoe objects)
=Output: String with designer's name and shoe information 

-Set flatlist varialbe to empty string
-Iterate over the array over inventory to get designerObject
-Iterate over deisngerObject's shoe's property 
-Set flatlist to designerObjects' name + shoe's name + shoe's price 
-If both iterations reached maxed length then break out of the iteration
-Else continue the next iteration on a new line
*/

function renderInventory(inventory) {

    let flatlist = '';

    for (let i = 0; i < inventory.length; i++) {
        let designerObj = inventory[i];

        for (let j = 0; j < designerObj.length; j++) {
            flatlist += designerObj.name + ', ' + designerObj.shoes[j].name + ' ' + designerObj.shoes[j].price;

            if (inventory.length - 1 && designerObj.length - 1) {
                break;
            } else {
                flatlist += '/n';
            }
        }
    }
    return flatlist;

}


/* 
PART B - 
Your function should return the average cost of all shoes per designer in this format:

let expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

Psuedocode:  
Input - array of obj
Output - obj of arr 
HP - create result obj with arr, iterate over inventory, create empty obj,
get designerName, create function for sum and average for shoes array,
push obj to designers arr and return
*/

function calculateAveragePricePerDesigner(inventory) {

    let averageObj = {
        designers: []
    }; 
    for (let i = 0; i < inventory.length; i++) {
        let designerObj = inventory[i];
        let shoesArray = inventory[i].shoes;
        let averagePriceObj = {
            name: designerObj.name,
            averagePrice: averagePrice(shoesArray)
        };
        averageObj.designers.push(averagePriceObj);
    }
    return averageObj;
    }
    

    function sum(shoesArray) {
        let sum = 0; 
        for (let j = 0; j < shoesArray.length; j++) {
            sum += shoesArray[j].price;
        }
        return sum;
    }
    

    function averagePrice(shoesArray) {
        return sum(shoesArray) / shoesArray.length; 
    }


/*
PART C -
Your task is to find all of the shoes with "black" in the name. 
Your function should filter these shoes, and return them in a "flat list" 
similarly to Part A:
console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900

Observe that a "flat list" refers to a string where each new line
is separated by the newline symbol. Also note that the "flat list" 
does not end with a newline symbol. 
Please write your own unit tests.

Psuedocode: 
Input - array of obj
Output - string
HP - create flatlist var, iterate over inventory, access shoes array,
If shoe array name is black, add designer name, shoe name and prc to fl,
Create isBlack function
*/ 


function listAllBlackShoes(inventory) {

let flatList = '';

for (let i = 0; i < inventory.length; i++) {
    let designerObj = inventory[i];

for (let j = 0; j < designerObj.shoes.length; j++) {
    if (isBlackShoe(designerObj.shoes[j])) {
        flatList += designerObj.name + ', ' + designerObj.shoes[j].name + ', ' + designerObj.shoes[j].price;
        
        if ((i === inventory.length-1) && (j === designerObj.shoes.length-1)) {
            break;
        } else {
            flatList += '\n';
        }
    }
}
}
return flatList;
}

function isBlackShoe(shoeObj) {
    if (shoeObj.name.indexOf('black') !== -1) {
        return true;
    } else {
        return false; 
    }
}

//ASSERTION
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log ('passed');
        } else {
        console.log('FAILED ' + testName + ' Expected ' + expected + ', but got ' + actual + '.');
        
    }  
}

//TESTS
const currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

let actualOutput = listAllBlackShoes(currentInventory);
let expectedOutput = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900';
assertEqual(actualOutput, expectedOutput, 'should return a flatlist with all of the black shoes within the inventory');



/*
PART D -  
The task now is to find all the laced shoes, 
but we are going to render them in a somewhat complex format. 
Your function should return shoe names that contain "lace" in them, 
and indicate which word contains "lace". 
The return value's format should be structured like this:

let expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

*/ 

function allLaceShoes (inventory) {
    let laceDetails = [];

    for (let i = 0; i < inventory.length; i++) {
        var designerObj = inventory[i];
        
    for (let j = 0; j < designerObj.shoes.length; j++) {
        let currentShoe = designerObj.shoes[j];
        
        if (hasLace(currentShoe.name)) {
            let nameWordsArray = currentShoe.name.split(' ');
            
            let laceObj = {
                nameWords: nameWordsArray,
                targetWordIndex: targetWordIndex(nameWordsArray)
            };
            
            laceDetails.push(laceObj);
            }
        }
    }
    return laceDetails;
    }

function hasLace(shoeName) {
    if (shoeName.indexOf('lace') > - 1) {
        return true;
    } else {
        return false;
    }
}

function targetWordIndex(nameWordsArray) {
    for (let k = 0; k < nameWordsArray.length; k++) {
        if(nameWordsArray[k].name.indexOf('lace') > -1) {
            return k;
        }
    }
}


// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
  }



  
  // TESTS FOR LIST ALL BLACK SHOES
let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  let actualLaceDetails = generateLaceDetails(inventory);
  let expectedLaceDetails = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
        "nameWords": [
          "red",
          "leather",
          "laced",
          "sneakers"
        ],
        "targetWordIndex": 2
      },
      {
        "nameWords": [
          "black",
          "leather",
          "laced",
          "sneakers"
        ],
        "targetWordIndex": 2
      }
    ];

    assertObjectsEqual(actualLaceDetails, expectedLaceDetails, 'should render correct lace details array');
