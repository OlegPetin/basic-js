const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 let resArr =[];
  if (Array.isArray(arr) == true) {
    if (arr.length == 0) {
      return resArr;
    } else {
      console.log(arr);
      // if (arr.includes('--discard-prev') || arr.includes('--double-prev') || arr.includes('--double-next') ||arr.includes('--discard-next') && arr.findIndex('--discard-prev') !=0 && arr.findIndex('--double-prev') !=0 && arr.findIndex('--double-next') !=arr.length-1 && arr.findIndex('--discard-next') !=arr.length-1 ) {
      //   console.log(arr);
      // } else {
      //   throw new Error('\'arr\' parameter must be an instance of the Array!');
      // }
    }    
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

 
 
  
}

module.exports = {
  transform
};
