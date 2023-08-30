const reverseWord = require('./reverseWord');

function isPalindrome(word) {
  return word.toLowerCase() === reverseWord(word).toLowerCase();
}

module.exports = isPalindrome;
