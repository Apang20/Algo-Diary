
let factorial = function fac(num){
    if (num ===1){
        return 1; 
    }else{
        return num * fac(num -1); 
    }
}; 

let final = factorial(5); 
console.log(final); //120