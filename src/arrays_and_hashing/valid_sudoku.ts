/** HINT:
 * write a hint here
 */
import {assertEq, printPass} from 'src/utils';

// 0,1,2; 3,4,5; 6,7,8;
function isValidSudoku(board: string[][]): boolean {
    const set = new Set()

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            if(cell === '.') continue
            const row = `row: ${i}, value: ${cell}`
            const column = `column: ${j}, value: ${cell}`
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const box = `boxNumber: ${boxNumber}, value: ${cell}`
            if(set.has(row) || set.has(column) || set.has(box)) return false
            set.add(row).add(column).add(box)
        }
    }
    return true
};
const NAME = 'valid-sudoku';

export function validSudokuMain() {
  let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  let result = isValidSudoku(board);
  assertEq(true, result);
  board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  result = isValidSudoku(board);
  assertEq(false, result);
  printPass(NAME);
}
