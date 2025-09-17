const string = 'this.is.a.test.string';
const value = '2';

/**
 * {
 *  this: {
 *    is: {
 *      a: {
 *        test: {
 *          string: '2'
 *        }
 *      }
 *    }
 *  }
 * }
 */

// Create a function that will build a object from the string and set the value of the last key to the value
const buildObject = (string, value) => {
  const keys = string.split('.');
  let obj = {};
  for (let index = keys.length - 1; index >= 0; index--) {
    const element = keys[index];
    if (index === keys.length - 1) {
      obj[element] = value;
    } else {
      obj = {
        [element]: obj,
      };
    }
  }
  return obj;
};
console.log(JSON.stringify(buildObject(string, value), null, 2));
