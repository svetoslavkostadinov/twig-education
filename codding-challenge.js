let groupArrayElements = (array, divider) => {

  // Determine the size of the equal arrays should be.
  const smallArraySize = Math.ceil(array.length / divider);
  const reminder = array.length % smallArraySize;
  const result = calculateTheArray(array, smallArraySize, reminder);
  console.log(JSON.stringify(result));
  return result;
}

let calculateTheArray = (array, smallArraySize, reminder) => {
  const resultArray = new Array(Math.ceil(array.length / smallArraySize));
  if(reminder === 0) { // if all the small arrays have the same size
    for(let i = 0; i < resultArray.length; i++) {
      resultArray[i] = assembleSmallArray(array, smallArraySize, i + 1);
    }
  } else { // if the size of the last small array differs than the others.
    for(let i = 0; i < resultArray.length - 1; i++) {
      resultArray[i] = assembleSmallArray(array, smallArraySize, i + 1);
    }
    resultArray[resultArray.length - 1] = assembleTheLastSmallArray(array,  smallArraySize, reminder, resultArray.length);
  }
  return resultArray;
}
/**
 * Assembles a small array from values of the correct group in the initial array and returns it.
 *
 * @param array - the initial array
 * @param smallArraySize - the size of the small array
 * @param group - the index of which group of items we shall include in the small array.
 * @returns {any[]} the small array.
 */
let assembleSmallArray = (array, smallArraySize, group) => {
  const smallArray = [];
  const startIndex = (group * smallArraySize) - (smallArraySize - 1); // initial index to iterate through the array.
  for(let i = startIndex; i < (startIndex + smallArraySize); i++) {
    smallArray.push(array[i - 1])
  }
  return smallArray;
}
/**
 * Assemble the last small array with different size.
 *
 * @param array
 * @param smallArraySize
 * @param reminder
 * @param group
 * @returns {*[]}
 */
let assembleTheLastSmallArray = (array, smallArraySize, reminder, group) => {
  const smallArray = [];
  const startIndex = (group * smallArraySize) - (smallArraySize - 1); // initial index to iterate through the array.
  for(let i = startIndex; i < (startIndex + reminder); i++) {
    smallArray.push(array[i - 1])
  }
  return smallArray;
}



groupArrayElements([1, 2, 3, 4, 5], 3);