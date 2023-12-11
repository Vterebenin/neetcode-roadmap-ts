/** HINT:
 * just create an array to store the difference with target
 * and check the difference with current number = difference,
 * then its the right one
 */
import {assertEq, printPass} from 'src/utils';

function twoSum(nums: number[], target: number): number[] {
  const mapper = [];
  for (const [index, number] of nums.entries()) {
    const diff = mapper[number];
    if (diff !== undefined) {
      return [diff, index];
    }
    mapper[target - number] = index;
  }
  return [];
}

const NAME = 'two-sum';

export function twoSumMain() {
  const args: [number[], number][] = [
    [[2, 7, 11, 15], 9],
    [[3, 2, 4], 6],
    [[3, 3], 6],
  ];
  const answers: number[][] = [
    [0, 1],
    [1, 2],
    [0, 1],
  ];
  for (const [index, argItems] of args.entries()) {
    assertEq(
      JSON.stringify(twoSum(...argItems)),
      JSON.stringify(answers[index])
    );
  }
  printPass(NAME);
}
