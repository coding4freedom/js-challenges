/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
    let num = parseInt(int.toString().split('').reverse().join(''));

    return parseInt(num) * Math.sign(int);
    
    /*
    return num < 0 ? parseInt(num) : -1 * num;
    */
      
};

module.exports = reverseInteger;

