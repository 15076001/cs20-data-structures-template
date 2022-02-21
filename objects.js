function getValue(obj, key){
    
    return obj[key];
}

function setValue(obj, key, val) {
	obj[key] = val;
}

function getNestedProperty(obj, key1, key2) {
	return obj[key1][key2];
}

function getKeys(obj) {
	return Object.keys(obj);
}

function containsKey(obj, key) {
    return Object.keys(obj).includes(key);
}