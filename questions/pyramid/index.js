/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
    let alg = (n + n) - 1;
    let mid = Math.floor(alg / 2);
    
    
    for ( let row = 0; row < n; ++row) {
        let step = '';
        for (let col = 0; col < alg; ++col) {
            if (col >= mid - row && col <= mid + row) {
                step += "#";
            } else {
                step += " ";
            }
        }
        console.log(step)
    }
};

module.exports = pyramid;
