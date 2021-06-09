
//Input - array of nums 
//Output - average 

function average(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total / array.length
}




//Input - array of whole numbers 
//Output - array of numbers in ascending order 
//EC - Cannot use the sort() method 
// const array1 = [1, 2, 3, 4]

function sort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        for (let j = 0; j < array.length; j++){
            if (array[j] < min){
                min = array[j]

            }
        }
        const minIndex = array.IndexOf(min);
        array[minIndex] = array[i];
        array[i] = min;
    }
    return array; 
}

const sort = (array) => {
    for (let i = 0; i < array.length; i++){
        let min = array[i];
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < min){
                min = array[j];
            }
        }
        const minIndex = array.indexOf(min);
        array[minIndex] = array[i];
        array[i] = min; 
    }
    return array; 
}
//Big 0 n^2


// function verify(i){
//     console.log(i);
// }

// sortResult = sort(array1);
// verify(sortResult); 



