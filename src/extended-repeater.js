const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatString = String(str);
  let resultString = '';

  if (options.repeatTimes !== undefined) {
      for (let i = 0; i < options.repeatTimes; i++) {
          resultString += repeatString;

          if (options.additionRepeatTimes !== undefined) {
              for (let j = 0; j < options.additionRepeatTimes; j++) {
                  resultString += options.addition;
                  if (j !== options.additionRepeatTimes - 1) {
                      (options.additionSeparator === undefined) ? resultString += '|': resultString += options.additionSeparator;;
                  }
              }
          }

          if (i !== options.repeatTimes - 1) {
              (options.separator === undefined) ? resultString += '+': resultString += options.separator;
          }
      }
      return resultString;
  }
  return repeatString + options.addition;
};
  