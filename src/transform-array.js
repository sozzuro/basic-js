const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error
  }

  let newArr = []

  for (let index = 0; index < arr.length; index++) {

    if (arr[index] === '--discard-next') {
      index++;
    } else if (arr[index] === '--discard-prev') {
      if (index > 0) {
        newArr.pop();
      } else {
        continue;
      }

    } else if (arr[index] === '--double-next') {
      if (arr.length > index + 1) {
        newArr.push(arr[index + 1]);
      } else {
        continue
      }

    } else if (arr[index] === '--double-prev') {
      if (index > 0) {
        newArr.push(arr[index - 1]);
      } else {
        continue;
      }

    } else {
      newArr.push(arr[index]);
    }
  }

  return newArr
};