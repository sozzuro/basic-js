const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let sumCats = 0
  backyard.forEach(item => item.forEach(item => item === '^^' ? sumCats++ : sumCats));
  return sumCats
};
