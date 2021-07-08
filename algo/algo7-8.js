/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
  let lc = 0;
  let rc = 0;
  let sortArray = [];
  while (lc < left.length && rc < right.length) {
    if (left[lc] <= right[rc]) {
      sortArray.push(left[lc]);
      lc++;
    } else if (right[rc] <= left[lc]) {
      sortArray.push(right[rc]);
      rc++;
    }
  }
  if (lc < left.length) {
    sortArray = sortArray.concat(left.slice(lc));
  }
  if (rc < right.length) {
    sortArray = sortArray.concat(right.slice(rc));
  }
  return sortArray;
}

console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let splitVal = Math.floor(nums.length / 2);
  let leftSplit = nums.slice(0, splitVal);
  let rightSplit = nums.slice(splitVal);

  return merge(mergeSort(leftSplit), mergeSort(rightSplit));
}

console.log(mergeSort(numsReversed));
console.log(mergeSort(numsRandomOrder));
