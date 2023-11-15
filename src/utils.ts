export const count_passed = {
  passed: 0,
};
export const assertEq = <T>(a: T, b: T) => {
  if (a !== b) {
    throw new Error(`expected ${a} to be equal to ${b}`);
  }
};

export const assert = (condition: boolean) => {
  if (!condition) {
    throw new Error('expected condition to be true');
  }
};

export const printPass = (name: string) => {
  count_passed.passed += 1;
  const link = `https://leetcode.com/problems/${name}/`;
  console.log(`passsed: ${name}, ${link}`);
};
export const printPassedTotalCount = () => {
  console.log(`total tests passsed: ${count_passed.passed}`);
};
