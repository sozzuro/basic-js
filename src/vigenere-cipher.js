const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(Reverse = true) {
      this.isReverse = Reverse;
  }

  encrypt(message, key) {
      if (message === undefined || key === undefined) {
          throw Error
      }

      let messageArray = message.toUpperCase().split('');
      let keyArray = key.toUpperCase().split('');
      let encryptLetterOfMessage = '';
      let encryptArray = [];

      for (var i = 0, j = 0; i < messageArray.length; i++, j++) {
          if (j >= keyArray.length) {
              j = 0;
          }

          encryptLetterOfMessage = messageArray[i].codePointAt();

          if (encryptLetterOfMessage >= 65 && encryptLetterOfMessage <= 90) {
              encryptLetterOfMessage += (keyArray[j].codePointAt() - 65);
              if (encryptLetterOfMessage > 90) {
                  encryptLetterOfMessage -= 26;
              }
          } else {
              j--;
          }

          encryptArray.push(String.fromCodePoint(encryptLetterOfMessage));
      }

      if (this.isReverse === false) {
          encryptArray.reverse();
      }

      return encryptArray.join('');
  }

  decrypt(message, key) {
      if (message === undefined || key === undefined) {
          throw Error
      }

      let messageArray = message.toUpperCase().split('');
      let keyArray = key.toUpperCase().split('');
      let encryptLetterOfMessage = '';
      let encryptArray = [];

      for (let i = 0, j = 0; i < messageArray.length; i++, j++) {
          if (j >= keyArray.length) {
              j = 0;
          }

          encryptLetterOfMessage = messageArray[i].codePointAt();

          if (encryptLetterOfMessage >= 65 && encryptLetterOfMessage <= 90) {
              encryptLetterOfMessage -= (keyArray[j].codePointAt() - 65);
              if (encryptLetterOfMessage < 65) {
                  encryptLetterOfMessage += 26;
              }
          } else {
              j--;
          }

          encryptArray.push(String.fromCodePoint(encryptLetterOfMessage));
      }

      if (this.isReverse === false) {
          encryptArray.reverse();
      }

      return encryptArray.join('');
  }
}

module.exports = VigenereCipheringMachine;
