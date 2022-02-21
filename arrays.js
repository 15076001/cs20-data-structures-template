function getLength(arr) {
	return arr.length;
}

function isEmpty(arr) {
	if (arr.length > 0) {
		return false;
	} else {
		return true;
	}
}

function getItemAtIndex(arr, i) {
	return arr[i];
}

function containsItem(arr, item) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			return true;
		}
	}
	return false;
}

function addToArray(arr, item) {

	let len = arr.length;
	arr[len] = item;
	return arr;
}

function sum(arr) {

	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

function clone(arr) {
	return [...arr];
}

function replaceItemAtIndex(arr, i, item) {
   
	let result = [...arr];
	result[i] = item;
	return result;
}

function removeRegion(arr, i, j) {

	let result = [...arr];
	let numAffected = j - i + 1;
	result.splice(i, numAffected);
	return result;

}


function merge(arr1, arr2) {
	return [...arr1, ...arr2];
}

