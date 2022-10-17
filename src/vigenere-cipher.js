const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 class InvalidArgs extends Error {
  constructor(message) {
      super(message);
      this.name = 'InvalidArgs'
  }
};

class VigenereCipheringMachine {

  constructor(direct = true){
    this.direct = direct
  }

  encrypt(message, key) {
    if (!message || !key){
      throw new InvalidArgs('Incorrect arguments!');
    }

    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let keyPhrase = '';
    let indInKey = 0;
    for (let i = 0; i < message.length; i++){
      if (/[a-z]/i.test(message[i])){
        if (indInKey >= key.length){
          indInKey -= key.length;
        }
        keyPhrase += key[indInKey];
        indInKey++;
      } else {
        keyPhrase += message[i]
      }
    }

    let encrypted = '';
    for (let i = 0; i < keyPhrase.length; i++){
      if (/[a-z]/i.test(keyPhrase[i])){
        let ind = alpha.indexOf(message[i].toLowerCase()) + alpha.indexOf(keyPhrase[i].toLowerCase());
        if (ind > 25){
          ind -= 26;
        }
        let letter = alpha[ind];
        encrypted += letter
      } else {
        encrypted += keyPhrase[i]
      }
    }

    if (this.direct){
      return encrypted.toUpperCase()
    } else{
      return encrypted.toUpperCase().split('').reverse().join('')
    } 
  }

  decrypt(message, key) {
    if (!message || !key){
      throw new InvalidArgs('Incorrect arguments!');
    }

    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let keyPhrase = '';
    let indInKey = 0;
    for (let i = 0; i < message.length; i++){
      if (/[a-z]/i.test(message[i])){
        if (indInKey >= key.length){
          indInKey -= key.length;
        }
        keyPhrase += key[indInKey];
        indInKey++;
      } else {
        keyPhrase += message[i]
      }
    }

    let encrypted = '';
    for (let i = 0; i < keyPhrase.length; i++){
      if (/[a-z]/i.test(keyPhrase[i])){
        let ind = alpha.indexOf(message[i].toLowerCase()) - alpha.indexOf(keyPhrase[i].toLowerCase());
        if (ind > 25){
          ind -= 26;
        } else if (ind < 0){
          ind += 26
        }
        let letter = alpha[ind];
        encrypted += letter
      } else {
        encrypted += keyPhrase[i]
      }
    }

    if (this.direct){
      return encrypted.toUpperCase()
    } else{
      return encrypted.toUpperCase().split('').reverse().join('')
    } 
  }
}

module.exports = {
  VigenereCipheringMachine
};
