const numbers = [6, 1, 8, 2, 3, 5];

// console.log(numbers);
// numbers.sort();
// console.log(numbers);

/**
 * using string
 */
const friends = ["sakib", "rakib", "akib", "nokib", "bakib"];
console.log(friends.sort());

const ages = [1, 5, 100, 15, 8, 2, 28];
ages.sort();
console.log(ages);

/**
 * kakai koiche je ektu obujar drkr nai
 *
 * asc --> ascending
 */
let sortedAges = ages.sort(function (a, b) {
  return a - b;
});
console.log(sortedAges);

/**
 * desc
 */
let sortedAgesDesc = ages.sort(function (a, b) {
  return b - a;
});
console.log(sortedAgesDesc);
