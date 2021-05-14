//Fashion Cataloge 
let currentInventory = [
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

/* 
PART A
Write a function that will take in this currentInventory array as its argument. 
Your function should access all the shoes across each designer  
Return them out in a flat list: 
{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

Example of a flat list in code: 
let flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);

Psuedocode:  
-Set flatlist varialbe to empty string
-Iterate over the array over inventory to get designerObject
-Iterate over deisngerObject's shoe's property 
-Set flatlist to designerObjects' name + shoe's name + shoe's price 
-If both iterations reached maxed length then break out of the iteration
-Else continue the next iteration on a new line
*/

function renderInventory(inventory) {



}