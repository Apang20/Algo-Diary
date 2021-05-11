// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    //From 0 to n (iterate through rows)
    //Create an empty string variable 'stair' 
    //From 0 to n (iterate through columns)
    //If the current colum is equal to or lelss than current row add # to 'stair'
    //Else add a space to 'stair' and console.log 
    
        for (let row = 0; row < n; row++){
            let stair = '';
    
            for (let column = 0; column < n; column++){
                if (column <= row){
                    stair += '#';
                }else {
                    stair += ' '; 
    
                }
            }
    
            console.log(stair); 
        }
    }

    
