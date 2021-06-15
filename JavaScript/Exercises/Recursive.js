
let factorial = function fac(num){ 
    if (num ===1){
        return 1; 
    }else{
        return num * fac(num -1); 
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