/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
  let pali = '';
  pali = [...str].reverse().join('');

  return str === pali ? true : false;
};

module.exports = palindrome;

/*
const palindrome = (str) => {
  return [...str].every((char, index) => (
    char === str.[str.length - 1 - index]  
  ))
};

*/
