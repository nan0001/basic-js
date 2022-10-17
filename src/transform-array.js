const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 class NotArray extends Error {
  constructor(message) {
      super(message);
      this.name = 'NotArray'
  }
};

function transform(arr) {
  let newArr = [];

  if (!Array.isArray(arr)){
    throw new NotArray("'arr' parameter must be an instance of the Array!");
  }

  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')){
    return arr
  }

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '--discard-next'){
      if (arr[i + 1]){i += 1}
    } else if (arr[i] === '--discard-prev'){
      if (arr[i - 1] && newArr[newArr.length - 1] === arr[i - 1]){newArr.pop()}
    } else if (arr[i] === '--double-next'){
      if (arr[i + 1]){newArr.push(arr[i + 1])}
    } else if (arr[i] === '--double-prev'){
      if (arr[i - 1] && newArr[newArr.length - 1] === arr[i - 1]){newArr.push(arr[i - 1])} 
    } else{
      newArr.push(arr[i])
    }
  }

  return newArr
}

module.exports = {
  transform
};
