/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
    const words = [...str.split(' ')];
    const finalWords = [];
    
    for (let word of words) {
        const newWord = word.substring().replace(word[0], word[0].toUpperCase());
        
        finalWords.push(newWord);
    }
    
    return finalWords.join(' ');
};

module.exports = capitalize;
