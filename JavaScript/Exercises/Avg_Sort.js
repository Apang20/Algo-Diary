






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

// function verify(i){
//     console.log(i);
// }

// sortResult = sort(array1);
// verify(sortResult); 