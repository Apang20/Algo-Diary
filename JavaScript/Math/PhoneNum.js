/*OOP Challenge
Your code should accept an array of numbers that represent a phone number. 
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. 
You code should return a string in this format: '(650) 835-9172'.
*/


function renderPhoneNumber(numbers){
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
      + numbers[3] + numbers[4] + numbers[5] + '-'
      + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  }