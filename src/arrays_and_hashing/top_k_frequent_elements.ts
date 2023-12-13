/** HINT:
 * write a hint here
 */
import {assertEq, printPass} from 'src/utils';

function topKFrequent(nums: number[], k: number): number[] {
  const mapper = new Map();
  for (const num of nums) {
    const entry = mapper.get(num) || 0;
    mapper.set(num, entry + 1);
  }
  return [...mapper.entries()]
    .sort((a, b) => {
      return a[1] <= b[1] ? 1 : -1;
    })
    .slice(0, k)
    .map(([key]) => key);
}

const NAME = 'top-k-frequent-elements';

export function topKFrequentElementsMain() {
  const args: [number[], number][] = [
    [[1, 1, 1, 2, 2, 3], 2],
    [[1], 1],
    [[3, 0, 1, 0], 1],
    [[4, 1, -1, 2, -1, 2, 3], 2],
  ];
  const answers: number[][] = [[1, 2], [1], [0], [-1, 2]];
  for (const [index, argItems] of args.entries()) {
    assertEq(
      JSON.stringify(topKFrequent(...argItems)),
      JSON.stringify(answers[index])
    );
  }
  printPass(NAME);
}
