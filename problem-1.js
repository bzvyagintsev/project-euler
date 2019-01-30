/* 
 * Multiples of 3 and 5
 *
 * https://projecteuler.net/problem=1
 */

function sum(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) { 
    if ((i % 3 === 0) || (i % 5 === 0 )) {
      sum = sum + i;
    }
  }

  return sum;
}
