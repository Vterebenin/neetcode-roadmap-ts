/** HINT:
 * just check left and if left exist go to right end with streak counting;
 * then just get max of 2 current streak or last max streak
 */
import {assertEq, printPass} from 'src/utils';

function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  return Array.from(set).reduce((maxStreak, num) => {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      maxStreak = Math.max(maxStreak, currentStreak);
    }
    return maxStreak;
  }, 0);
}

const NAME = 'longest-consecutive-sequence';

export function longestConsecutiveSequenceMain() {
  const nums = [100, 4, 200, 1, 3, 2];
  const result = longestConsecutive(nums);
  assertEq(result, 4);
  const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
  const result2 = longestConsecutive(nums2);
  assertEq(result2, 9);
  const nums3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
  const result3 = longestConsecutive(nums3);
  assertEq(result3, 7);
  printPass(NAME);
}
