/** HINT:
 * create a HashMap that will count up duplicates
 * if it contains already setted item, then true
   * false otherwise
 */
import {assert} from 'console';
import {printPass} from 'src/utils';

function containsDuplicate(nums: number[]): boolean {
  const map = new Map();

  for (const num of nums) {
    if (map.get(num)) {
      return true;
    }

    map.set(num, 1);
  }

  return false;
}

const NAME = 'contains-duplicate';

export function containsDuplicateMain() {
  let nums = [1, 2, 3, 1];
  assert(containsDuplicate(nums));
  nums = [1, 2, 3, 4];
  assert(!containsDuplicate(nums));
  printPass(NAME);
}
