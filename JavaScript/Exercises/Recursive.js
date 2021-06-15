
function countDown(num) {
    if (num > 1) {
        countDown(num - 4);
    }
}
countDown(5);



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