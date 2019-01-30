/* 
 * Largest prime factor
 *
 * https://projecteuler.net/problem=3
 */
 
 
function findFactors(number) {
  const sqrt = Math.sqrt(number);
  let currentNumber = number;
  let arr = [];
  
  for (i = 2; i < sqrt; i++) {
    if (currentNumber % i === 0) {
      currentNumber = currentNumber / i;
      arr.push(i);
    }
  }
  
  return findLargestNumber(arr);
}

function findLargestNumber(arr) {
  return Math.max(...arr);
}
