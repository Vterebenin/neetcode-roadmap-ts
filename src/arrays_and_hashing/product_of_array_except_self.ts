/** HINT:
 * create a postfix, prefix, postfix_index, prefix_index
 * just to compute the left and right
 * products of each values
 */
import {assertEqExact, printPass} from 'src/utils';

function productExceptSelf(nums: number[]): number[] {
  const answer = Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  let postfix_index = nums.length - 1;
  for (const prefix_index in nums) {
    answer[prefix_index] *= postfix;
    answer[postfix_index] *= prefix;

    prefix *= nums[postfix_index];
    postfix *= nums[prefix_index];

    postfix_index -= 1;
    if (postfix_index < 0) {
      break;
    }
  }
  return answer;
}

const NAME = 'product-of-array-except-self';

export function productOfArrayExceptSelfMain() {
  const result = productExceptSelf([1, 2, 3, 4]);
  assertEqExact(result, [24, 12, 8, 6]);
  const resultNext = productExceptSelf([-1, 1, 0, -3, 3]);
  assertEqExact(resultNext, [0, 0, 9, 0, 0]);
  printPass(NAME);
}
