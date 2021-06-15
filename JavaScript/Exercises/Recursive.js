function countDown(num){
    for (let i = n; i > 0; i--){
    }
    console.log('Hooray'); 
}

function countDownRecursive(n){
    if (n <= 0) {
        console.log('Hooray');
        return
    }
    console.log(n);
    countDownRecursive(n - 1)
}

/* 
countDownRecursive(3)
    countDownRecursive(2)
        countDownRecursive(1)
            countDownRecursive(0)
            return
        return
    return
return
*/


function countDown2(num) {
    if (num > 1) {
        countDown(num - 4);
    }
}
countDown(5);


function sumRange(n){
    let total = 0;
    for (let i = 0; i < n; i--){
        total += i
    }
    return total; 
}


function powI(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  alert( powI(2, 3) ); // 8


  function powR(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * powR(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8


//Calculating the power: 4^4
function power(num, pow){
    if(pow === 1){
        return num; 
    }else{
        return num * power(num, pow - 1);
    }
}


//Summing array elements
function sum(elements) {
    if (elements.length === 0) {
        return 0;
    }else{
        const [head,...rest] = elements;
        return head * sum(rest);
    }
}
console.log(sum([1, 2, 3, 4, 5]));





let factorial = function fac(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * fac(num - 1);
    }
};

let final = factorial(5);
console.log(final); //120

/*

5*fac(4)
5*4*fac(3)
5*4*3*fac(2)
5*4*3*2*1
5*4*3*2
5*4*6
5*24
120


*/