import {assert} from 'console';
import {printPass} from 'src/utils';

const START_CODE = 97;
const ENGLISH_LETTERS_COUNT = 26;
function isAnagram(s: string, t: string): boolean {
  const buffer = Array(ENGLISH_LETTERS_COUNT).fill(0);
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i) - START_CODE;
    buffer[charCode] += 1;
    charCode = t.charCodeAt(i) - START_CODE;
    buffer[charCode] -= 1;
  }
  return !buffer.some(item => item);
}

const NAME = 'valid-anagram';

export function isAnagramMain() {
  const args: [string, string][] = [
    ['anagram', 'nagaram'],
    ['rat', 'cat'],
  ];
  const answers: boolean[] = [true, false];
  for (const [index, argItems] of args.entries()) {
    assert(isAnagram(...argItems) === answers[index]);
  }
  printPass(NAME);
}
