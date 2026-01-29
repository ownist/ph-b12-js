/**
 * ekta array theke sobgulo upadan jog kore jei jogfol ta return korte hobe
 */
let sum = 0;

function sumOfArray(arr) {
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
const result = sumOfArray([3, 6, 5, 6, 9]);
console.log(`total sum of numbers are: ${result}`);
