const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = []

  if (!Array.isArray(members)) {
    return false
  }
  members.forEach(element => {
    if (typeof element === 'string') {
      arr.push(element.trim()[0].toLocaleUpperCase())
    }
  });

  return arr.sort().join('');
};
