/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
    const char = '#';
    
    for(let i = 1; n >= i; i++) {
        if (i === n) {
           console.log(`${char.repeat(i)}`)
        } else if(i < n){
            console.log(`${char.repeat(i)}${' '.repeat(n - i)}`);
        }
    }
    return ;
};

module.exports = steps;


/*
 nested for loop way

  for ( let row = 0; row < n; ++row) {
    let step = '';
    for ( let column = 0; column < n ++column) {
        if (colum <= row) {
            step += '#';
        }else {
            step += " ";
        }
    }
  }

  return step;
*/