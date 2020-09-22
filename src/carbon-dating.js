const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && !isNaN(parseFloat(sampleActivity)) && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD))
    return isNaN(t) && !isFinite(t) ? false : t;
  }
  return false;
};
