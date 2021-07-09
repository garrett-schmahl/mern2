/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  let midIdx = Math.floor(left + right / 2);
  //travel from 0 to the right until a value lower than pivot is found
  //travel from midIdx to right until a higher value is found
  //swap values
  //if midIdx is reached, stop
  //travel through remainder of right, find any additional values and swap them to the right of idIdx.
  //swap mididx and farther right smaller val
  //if end or array is reached, stop
  //swap mididx with counter +1
  let leftTrack = 0;
  let rightTrack = midIdx + 1;
  let foundLargeLeftIdx = false;
  let foundSmallRightIdx = false;
  while (leftTrack < midIdx && rightTrack < right + 1) {
    if (!foundLargeLeftIdx) {
      if (nums[leftTrack] > nums[midIdx]) {
        foundLargeLeftIdx = leftTrack;
      } else {
        leftTrack++;
      }
    }
    if (!foundSmallRightIdx) {
      if (nums[rightTrack] < nums[midIdx]) {
        foundSmallRightIdx = rightTrack;
      } else {
        rightTrack++;
      }
    }
    if (foundSmallRightIdx && foundLargeLeftIdx) {
      [nums[foundSmallRightIdx], nums[foundLargeLeftIdx]] = [
        nums[foundLargeLeftIdx],
        nums[foundSmallRightIdx],
      ];
      foundLargeLeftIdx = false;
      foundSmallRightIdx = false;
    }
  }
  if (leftTrack === midIdx) {
    let midPlus = midIdx + 1;
    while (rightTrack < right + 1) {
      if (!foundSmallRightIdx) {
        if (nums[rightTrack] < nums[midIdx]) {
          foundSmallRightIdx = rightTrack;
        } else {
          rightTrack++;
        }
      } else {
        [nums[foundSmallRightIdx], nums[midPlus]] = [
          nums[midPlus],
          nums[foundSmallRightIdx],
        ];
        midPlus++;
      }
    }
    [nums[midIdx], nums[midPlus - 1]] = [nums[midPlus - 1], nums[midIdx]];
  } else if (rightTrack === right + 1) {
    [nums[leftTrack], nums[midIdx]] = [nums[midIdx], nums[leftTrack]];
  }
  return leftTrack;
}

console.log(partition(nums1));
console.log(nums);
