const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, arrDepth = []) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    arrDepth.push(depth);
    
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], depth + 1, arrDepth)
      }
    }

    let result = Math.max(...arrDepth);
    return result;
  }
};