/** HINT:
 * write a hint here
 */
import {assertEq, printPass} from 'src/utils';

interface Brackets {
  [key: string]: string;
}

const BRACKETS: Brackets = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function isValid(s: string): boolean {
  const stack: string[] = [];
  const closingBrackets = Object.values(BRACKETS);
  for (const char of s) {
    if (closingBrackets.includes(char)) {
      const closing = stack.pop();
      if (closing !== char) return false;
    } else {
      stack.push(BRACKETS[char as string]);
    }
  }
  return stack.length === 0;
}

const NAME = 'valid-parentheses';

export function validParenthesesMain() {
  assertEq(isValid('()'), true);
  assertEq(isValid('()[]{}'), true);
  assertEq(isValid('(]'), false);
  printPass(NAME);
}
