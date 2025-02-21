function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce(function(acc, val) {
		return acc + val;
	});

	// Второй вариант

	// let min = Infinity;
	// let max = -Infinity;
	// let sum = 0;
	// for(let i = 0; i < arr.length; i++){
	//   if(arr[i] > max){
	//     max = arr[i];
	//   }
	//   if(arr[i] < min){
	//     min = arr[i];
	//   }
	//   sum += arr[i];
	// }

	let avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	let sum = arr.reduce(function(acc, val) {
		return acc + val;
	});

	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 0; i < arrOfArr.length; i++) {
		const max = func(...arrOfArr[i]);
		if (max > maxWorkerResult) {
			maxWorkerResult = max;
		}
	}
  
	return maxWorkerResult;
}