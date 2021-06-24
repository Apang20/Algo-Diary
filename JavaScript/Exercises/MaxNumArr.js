//GIVEN AN ARRAY OF INTEGER FIND THE LONGEST SEQUENCE OF THE SAME NUMBER
//AND RETURN THE NUMBER (NOT THE NUMBER OF REPTITIONS)
//ie. findMostRepeated([3,3,3,4,4,4,4,6,6,6,1,1,4,4,1,1,1,1,1,1,4,4,4,4,3,4,4,4]) = 1 

//PSUEDOCODE: 
//Find longest sequence of the same number
//Input - an array of integers
//Output - one integer (max occurance)
//create an obj variable 
//iterate over theh array -> obj 
//iterate over the obj to return max integer


/*
arr = [3,3,3,4,4,4,4,3,3,6,6,6,1,1,4,4,1,1,1,1,1,1,4,4,4,4,3,4,4,4]
currentLongest = 2;
currentNum = 3;
arr[i] = 3

numMap = {
	3: 3,
	4: 4,
}

*/

function maxInt(arr){
	return findLongerKey(generateMap(arr))
}

function maxInt(arr){
	const numMap = {};
	let max = 0; 
	let maxNum = 0; 
	let currentLongest;
	let currentNum;

	for (let num of arr){
		if (currentNum !== num) {
			currentNum = num
			currentLongest = 1
		} else {
			++currentLongest
		}

		if(numMap[num]) {
			if (currentLongest > numMap[num]) {
				numMap[num] = currentLongest
			}
			
		} else {
			numMap[num] = 1
		}
	}

	for ( let num in numMap) {
		if(numMap[num] > max){ 
			max = numMap[num];
			maxNum = num;
		}
	}
	return maxNum; 
}

console.log(maxInt([3,3,3,4,4,4,4,3,3,6,6,6,6,6,6,6,1,1,4,4,1,1,1,1,1,1,4,4,4,4,3,4,4,4]))


function create() {
	let counter = 0
	return {
		increment: function() {
        	counter++
    	},
  
    	print: function() {
        	console.log(counter)
    	}
	}
}
let c = create()
c.increment()
c.print()  