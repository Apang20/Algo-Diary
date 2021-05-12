/*OOP Challenge
Your code should accept an array of numbers that represent a phone number. 
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. 
You code should return a string in this format: '(650) 835-9172'.
*/

//SOLUTION 1
function renderPhoneNumber(numbers){
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
      + numbers[3] + numbers[4] + numbers[5] + '-'
      + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  }





  // SOLUTION 2: FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
  }
  
  PhoneNumberFormatter.prototype.render = function() {
    let string = '';
    string += this.parenthesize(this.getAreaCode());
    string += ' ';
    string += this.getExchangeCode();
    string += '-';
    string += this.getLineNumber();
    return string;
  };
  
  PhoneNumberFormatter.prototype.getAreaCode = function() {
    return '' + this.slice(0,3);
  };
  
  PhoneNumberFormatter.prototype.getExchangeCode = function() {
    return '' + this.slice(3,6);
  };
  
  PhoneNumberFormatter.prototype.getLineNumber = function() {
    return '' + this.slice(6,10);
  };
  
  PhoneNumberFormatter.prototype.parenthesize = function(string) {
    return '(' + string + ')';
  };
  
  PhoneNumberFormatter.prototype.slice = function(start, end) {
    return this.numbers.slice(start, end).join('');
  };
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual (actual, expected, testName) {
      if (actual === expected) {
          console.log('passed');
      } else {
          console.log('FAILED' + testName + "; expected " + expected + ", but got " + actual + ".");
      }
  }
