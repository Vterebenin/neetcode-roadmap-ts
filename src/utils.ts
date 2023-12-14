import {CONSOLE_COLORS, TOTAL_COLORS} from './const';

export const count_passed = {
  passed: 0,
};
export const throwExpectedEqualError = <T>(a: T, b: T) => {
  throw new Error(`expected ${a} to be equal to ${b}`);
};
export const assertEq = <T>(a: T, b: T) => {
  if (a !== b) {
    throwExpectedEqualError(a, b);
  }
};

export const assertEqExact = <T>(a: T, b: T) => {
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    throwExpectedEqualError(a, b);
  }
};

export const assert = (condition: boolean) => {
  if (!condition) {
    throw new Error('expected condition to be true');
  }
};

const printWithColors = (msg: string, ...colors: string[]) => {
  console.log(`${colors.join('')}${msg}`);
};
export const printPass = (name: string) => {
  count_passed.passed += 1;
  const link = `https://leetcode.com/problems/${name}/`;
  console.log(
    `${CONSOLE_COLORS.FgGreen}passsed: ${CONSOLE_COLORS.FgCyan}${name}, ${link}`
  );
};

export const printPassedTotalCount = () => {
  printWithColors(
    `total tests passsed: ${count_passed.passed}`,
    ...TOTAL_COLORS
  );
};

export const clearTerminal = () => {
  console.log('\x1b[2J');
};
