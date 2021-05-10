// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    const result = [];
    let index = 0;

    while (index < array.length) {
        result.push(array.slice(index, index + size))
        index += size; //increment by size
    }
    return result
}


//TWO:
// function chunk(array, size) {

//     let chunked = [];

//     for (let element of array) {
//         const lastElement = chunked[chunked.length - 1];

//         if (!lastElement || lastElement.length === size) {
//             chunked.push([element]);
//         } else {
//             lastElement.push(element);
//         }
//     }
//     return chunked;
// }
