const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray : new Array(),

  getLength() {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chainArray.length;
  },
  addLink(value) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.chainArray.length || !Number.isInteger(position)) {
      this.chainArray = [];
      throw Error;
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let finishString = this.chainArray.join('~~');
    this.chainArray = [];
    return finishString;
  }
};

module.exports = chainMaker;
