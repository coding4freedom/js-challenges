/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] = 1 || 1;
  }

  for (let char in charMap) {       // the in keyword is to look over objects
    if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
    }
  }

  return maxChar;
};

module.exports = maxCharacter;


/*
let str = 'simples';
const charMap = {};

for (let char of str) {
   if (!charMap[char]) {
      charMap[char] = 1;
   } else {
      charMap[char] = charMap[char] + 1 
   }
}
-------------------------------
 how to make a character map
for (let char of str) {
  charMap[char] = charMap[char] + 1 || 1
}
--------------------------------
advanced way to solve this

let str = 'simples';
const charMap = new Map();      ** Map() method 
let max = 0;
let maxChar = '';

for (let char of str) {  
  charMap.set(char, charMap.get(char) + 1 || 1);
}

for (let [char, count] of charMap) {         ** we are destructing key and value from the first and second index of the array.
  if (count > max) {                         ** which the key is char and the value is count
    max = count;
    maxChar = char;
  }                                          
}

return maxChar;
*/