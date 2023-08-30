function reverseWord(word) {
  return word.split('').reverse().join('').replaceAll(',', '');
}

module.exports = reverseWord;
