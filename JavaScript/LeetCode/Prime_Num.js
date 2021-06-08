/*
prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
Prime numbers are divisible only by the number 1 or itself.  
Input - any one number 
Output - boolean 
To prove whether a number is a prime number, 
first try dividing it by 2, and see if you get a whole number.

 If you do, it can't be a prime number. If you don't get a whole number, 
 next try dividing it by prime numbers: 3, 5, 7, 11 (9 is divisible by 3) and so on, always dividing by a prime number
*/
//HL
//create a function that takes in a number 
//if statement using the modulo to test the division limitations
//return T/F

function isPrime(num) {
    let primeArr = [3, 5, 7, 11];

    if (num <= 1 || num % 2 === 0 ){
        return false; 
    }
    for (let i = 0; i < primeArr.length; i++) {
        if (num % primeArr[i] === 0) {
            return false
        }else{
            return true; 
        }
    }
}


function isPrime2(num) {
    let counter = num;
    let factors = 0;
    while (counter > 0) {
        if (num % counter === 0) {
            factors += 1;
        }
        counter--;
    }
    return factors === 2;
}


function verify(i) {
    console.log(i);
}

result = isPrime2(1);

verify(result); //node Prime_Num.js in terminal 