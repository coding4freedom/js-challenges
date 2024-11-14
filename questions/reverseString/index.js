/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
    return [...str].reverse().join('');
};

module.exports = reverseString;

/* other ways to solve
const reverseString = (str) => {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}
----- second way

const reverseString = (str) => {
    const arr = str.split('');
    const reversedArr = arr.reverse();

    return reversedArr.join('');
}

or just return str.split('').reverse().join('');

---------third way

const reverseString = (str) => {
    return [...str].reduce((acc, curr) => curr + acc).join('');

}
*/

