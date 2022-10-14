const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let max = 0;
  for (let i = 0; i < str.length; i++){
    let ind = str.indexOf(str[i])
    let arr = str.split('')
    arr.splice(ind,1)
    let num = Number(arr.join(''))
    if(num > max){
      max = num
    }
  }

  return max
}

module.exports = {
  deleteDigit
};
