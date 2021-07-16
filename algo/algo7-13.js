// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  let sumLR = 0;
  let sumRL = 0;
  for (let i = 0; i < sqrMatrix.length; i++) {
    sumLR += sqrMatrix[i][i];
    sumRL += sqrMatrix[i][sqrMatrix.length - i - 1];
  }
  return Math.abs(sumLR - sumRL);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
  const unionArray = [];
  const freqTableSortedA = {};
  const freqTableSortedB = {};
  let highestVal = 0;
  //build frequency table for sortedA
  for (let i = 0; i < sortedA.length; i++) {
    if (!freqTableSortedA[sortedA[i]]) {
      freqTableSortedA[sortedA[i]] = 0;
    }
    freqTableSortedA[sortedA[i]]++;

    if (sortedA[i] > highestVal) {
      highestVal = sortedA[i];
    }
  }
  //build frequency table for sortedB
  for (let i = 0; i < sortedA.length; i++) {
    if (!freqTableSortedB[sortedB[i]]) {
      freqTableSortedB[sortedB[i]] = 0;
    }
    freqTableSortedB[sortedB[i]]++;

    if (sortedB[i] > highestVal) {
      highestVal = sortedB1[i];
    }
  }
  console.log(freqTableSortedA)
  console.log(freqTableSortedB)
  //compare frequency tables. Highest value pushes the key that many times to a new array
  for (let i = 0; i <= highestVal; i++) {
    if (freqTableSortedA[i] == 0 && freqTableSortedB[i] == 0) {
      continue;
    }
    if (freqTableSortedA[i] > freqTableSortedB[i] || !freqTableSortedB[i]) {
      for (let j = 0; j < freqTableSortedA[i]; j++) {
        unionArray.push(i);
      }
    }
    if (freqTableSortedA[i] <= freqTableSortedB[i] || !freqTableSortedA[i]) {
      for (let j = 0; j < freqTableSortedB[i]; j++) {
        unionArray.push(i);
      }
    }
  }
  //return new array
  return unionArray;
}

console.log(orderedMultisetUnion(numsA, numsB));





//better ordered multiset I made by accident
function buildFreqTable(array, freqTable = {}) {
  for (let i = 0; i < array.length; i++) {
    if (!freqTable[array[i]]) {
      freqTable[array[i]] = 0;
    }
    freqTable[array[i]]++;
  }
  return freqTable;
}

function symmetricDifferences(numsA, numsB) {
  const differenceArray = [];
  const numsATable = buildFreqTable(numsA);
  const numsAllTable = buildFreqTable(numsB, numsATable);

  for (const key in numsAllTable) {
    differenceArray.push(key);
  }
  return differenceArray;
}

console.log(symmetricDifferences(test1NumsA, test1NumsB));
console.log(symmetricDifferences(test2NumsA, test2NumsB));
console.log(symmetricDifferences(test3NumsA, test3NumsB));