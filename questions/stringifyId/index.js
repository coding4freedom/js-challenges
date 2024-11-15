/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);
    const uniqueArray = [...new Set(idArray)]; // set removes dup values
    

    return uniqueArray.join(', ');
};

module.exports = stringifyId;

/*
 - convert the array of Object into an Array of IDs
 - convert the array of IDs into an Array of unique IDs
 - join the array to create a string of IDs separated by ','

 example of the brute force way

 const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);
    const uniqueArray = [];
    let idString = '';

    for(let id of idArray) {
        if (!uniqueArray.includes(id)) {
            uniqueArray.push(id);
        }
    }

    for (let i = 0; i < uniqueArray.length; i++) {
        // if we are not on the last element
        if (i !== uniqueArray.length - 1) {
            idString += `${uniqueArray[i]}, `
        } else {
            idString += uniqueArray[i];
        }
        // add the id and ','
        // else
        //   just add id
    }
    return idString;
 };
*/