function listAllNames(arr){

    let str  = "";
    arr.forEach((el) => {

        if (str == "") {
			str += el.name;
		} else {
			str += ", " + el.name;
		}
	});

	return str;
}

function listFilteredNames (arr, key){
	
str = "";
arr.filter((el) => el[key]) //el[key]
arr.forEach((el) => {
		
  
	    if (str == "") {
					
		str += el.name;
				} 
				
				else {
					str += ", " + el.name;
				}
			});
	
		return str;
	}		




function isValueBigger(arr, key, i, j) {
	//Level 0:
	let value1 = arr[i][key];
	let value2 = arr[j][key];
	if (value1 > value2) {
		return true;
	}
	return false;
}
