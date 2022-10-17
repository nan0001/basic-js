const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let additionString = '';
  let additionArr = [];
  if (options.additionRepeatTimes){
    for (let i = 0; i < options.additionRepeatTimes; i++){
      if(!(typeof options.addition === 'undefined')){
        additionArr.push(String(options.addition))
      }
    }
  } else {
    if(!(typeof options.addition === 'undefined')){
      additionArr.push(String(options.addition))
    }
  }
  if (options.additionSeparator){
    additionString = additionArr.join(options.additionSeparator)
  } else {
    additionString = additionArr.join('|')
  }

  if (options.repeatTimes){
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(String(str) + additionString)
    }
  } else {
    arr.push(String(str) + additionString)
  }
  if (options.separator){
    res = arr.join(options.separator)
  } else {
    res = arr.join('+')
  }
  return res
}

module.exports = {
  repeater
};
