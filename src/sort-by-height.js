const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let toSort = Array.from(arr)
  let count = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] === -1){
      count += 1
    }
  }
  let sorted = toSort.sort((a,b)=>a-b).filter((num)=>num !== -1)
  console.log(arr)
  console.log(sorted)
  let res =[];
  let j = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] === -1){
      res.push(arr[i])
    } else{
      res.push(sorted[j])
      j+= 1
    }
  }
  return res
}

module.exports = {
  sortByHeight
};
