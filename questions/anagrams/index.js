/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
    
    const firstMap = buildCharMap(strA);
    const secondMap = buildCharMap(strB);

    if (firstMap.size !== secondMap.size) {
        return false;
    }

    for (const [char, count] of firstMap) {
        if (secondMap.get(char) !== count) {
            false;
        }
    }

    return true;
}

const buildCharMap = (str) => {
    const charMap = new Map();
    for ( let char of removeSpacesAndLowerCase(str)) {        
        charMap.set(char, charMap.get(char) + 1 || 1);
    }
    return charMap
}

const removeSpacesAndLowerCase = (str) => {
    return str.toLowerCase().replaceAll(' ', "")
}

module.exports = anagrams;


/*
const anagrams = (strA, strB) => {
    let first = strA.toLowerCase().split(' ').join('');
    let firstNoSpaces = first.split('').sort().join('');
    
    let second = strB.toLowerCase().split(' ').join('')
    let secondNospaces = second.split('').sort().join('');
    
    return firstNoSpaces === secondNospaces;
}


*/
