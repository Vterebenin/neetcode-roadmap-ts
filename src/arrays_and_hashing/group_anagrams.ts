/** HINT:
 * Prime numbers are only divisible by themselves. 
 * If you multiply them together, you can only 
* reach the resulting number by using the same values. 
  * If you map the chars to prime numers and the 
* resulting total is equal, it must be comprised of 
* the same chars in the same amount. Meaning it is an anagram.
 */
import {assertEq, printPass} from 'src/utils';

const primes: number[] = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

function convertStringToPrimeValue(s: string): number {
  let total = 1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const primeNumber = primes[c.charCodeAt(0) - 97];
    total *= primeNumber;
  }
  return total;
}

function groupAnagrams(strs: string[]): string[][] {
  const groupedAnagrams: string[][] = [];
  const groupAnagramMap: Map<number, number> = new Map();
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    const primeValue: number = convertStringToPrimeValue(s);
    const value = groupAnagramMap.get(primeValue);
    if (value !== undefined) {
      groupedAnagrams[value].push(s);
    } else {
      groupAnagramMap.set(primeValue, groupedAnagrams.length);
      groupedAnagrams.push([s]);
    }
  }
  return groupedAnagrams;
}
const NAME = 'group-anagrams';

export function groupAnagramsMain() {
  const args: [string[]][] = [
    [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    [['']],
    [['a']],
  ];
  const answers: string[][][] = [
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
    [['']],
    [['a']],
  ];
  for (const [index, argItems] of args.entries()) {
    assertEq(
      JSON.stringify(groupAnagrams(...argItems)),
      JSON.stringify(answers[index])
    );
  }
  printPass(NAME);
}
