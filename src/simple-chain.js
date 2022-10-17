const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 class IncorrectLink extends Error {
  constructor(message) {
      super(message);
      this.name = 'IncorrectLink'
  }
};

const chainMaker = {

  length: 0,
  res:[],

  getLength() {
    return this.length
  },
  addLink(value) {
    this.res.push(`( ${value} )`) 
    this.length ++
    return chainMaker
  },
  removeLink(position) {
    if(!(typeof position === 'number') || position <= 0 || position > this.length){
      throw new IncorrectLink("You can't remove incorrect link!")
    }

    let newRes = [];
    for (let i = 0; i < this.res.length; i++){
      if (i !== position - 1){
        newRes.push(this.res[i])
      }
    }
    this.res = newRes
    return chainMaker
  },
  reverseChain() {
    this.res = this.res.reverse();
    return chainMaker
  },
  finishChain() {
    return this.res.join('~~')
  }
};

module.exports = {
  chainMaker
};
