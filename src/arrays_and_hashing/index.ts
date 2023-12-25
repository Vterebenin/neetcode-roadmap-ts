import {containsDuplicateMain} from 'src/arrays_and_hashing/contains_duplicate';
import {isAnagramMain} from 'src/arrays_and_hashing/valid_anagram';
import {twoSumMain} from 'src/arrays_and_hashing/two_sum';
import {groupAnagramsMain} from 'src/arrays_and_hashing/group_anagrams';
import {topKFrequentElementsMain} from 'src/arrays_and_hashing/top_k_frequent_elements';
import {productOfArrayExceptSelfMain} from 'src/arrays_and_hashing/product_of_array_except_self';
import {validSudokuMain} from './valid_sudoku';
import { longestConsecutiveSequenceMain } from './longest_consecutive_sequence';

export const arraysAndHashing = () => {
  containsDuplicateMain();
  isAnagramMain();
  twoSumMain();
  groupAnagramsMain();
  topKFrequentElementsMain();
  productOfArrayExceptSelfMain();
  validSudokuMain();
  longestConsecutiveSequenceMain();
};
