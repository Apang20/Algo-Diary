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
//input - array of obj
//output - obj of arr 
//hp - create result obj with arr, iterate over inventory, create empty obj,
//get designerName, create function for sum and average for shoes array,
//push obj to designers arr and return
*/

function calculateAveragePricePerDesigner(inventory) {}
