/* 
 * Even Fibonacci numbers
 *
 * https://projecteuler.net/problem=2
 */
 
let sum = 0;
const limit = 10;
let currentTerm = 1;
let prevTerm = 0;

function fiboEven() {
  let newTerm = currentTerm + prevTerm;
  prevTerm = currentTerm;
  currentTerm = newTerm;
  
  if (currentTerm > limit) {
    return sum;
  }
  
  if (currentTerm % 2 === 0) {
    sum = sum + currentTerm;
  }
  
  return fiboEven();
}
