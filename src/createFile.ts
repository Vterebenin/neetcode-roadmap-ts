// createFile.ts
import * as fs from 'fs';

const snakeToCamel = (str: string): string => {
  return str.replace(/(_\w)/g, match => match[1].toUpperCase());
};

const snakeToKebab = (str: string): string => {
  return str.replace(/_/g, '-');
};

const generateFileContent = (fileName: string): string => {
  const funcName = snakeToCamel(fileName);
  const funcLinkName = snakeToKebab(fileName);
  return `
/** HINT:
 * write a hint here
 */
import {assertEq, printPass} from 'src/utils';

function ${funcName}(_): void {
  // your code here
}

const NAME = '${funcLinkName}';

export function ${funcName}Main() {
  ${funcName}()
  printPass(NAME);
}`;
};

const createFile = (folder: string, fileName: string) => {
  const filePath = `src/${folder}/${fileName}.ts`;
  const fileContent = generateFileContent(fileName);

  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`File ${fileName}.ts created in ${folder}`);
};

// Parse command line arguments
const args = process.argv.slice(2);

// Check if enough arguments are provided
if (args.length < 2) {
  throw new Error('Usage: npx node-ts createFile.js <folder> <fileName>');
}

const [folder, fileName] = args;

// Create the file
createFile(folder, fileName);
