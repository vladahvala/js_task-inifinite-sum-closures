'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function summa(num) {
    const sumCopy = sum;

    if (num === undefined) {
      sum = 0;

      return sumCopy;
    } else {
      sum += num;

      return summa;
    }
  };
}

module.exports = makeInfinityAdder;
