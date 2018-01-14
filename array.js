function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 var newArray = [element, ...array];
 return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  var newArry2 = array.unshift(element);
  return newArry2;
}

function addElementToEndOfArray(array, element) {
  newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  newArray = array.push(element);
  return newArray;
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
